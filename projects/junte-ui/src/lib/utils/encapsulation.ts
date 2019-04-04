import {Gulpclass, SequenceTask, Task} from 'gulpclass';
import * as gulp from 'gulp';
import * as map from 'map-stream';
import * as path from 'path';
import * as fs from 'fs';
import {readdirSync} from 'fs';
import 'reflect-metadata';
import {HTMLElement, Node, parse} from 'node-html-parser';
import {parse as scssParce, stringify} from 'scss-parser';
import * as watch from 'gulp-watch';
import * as createQueryWrapper from 'query-ast';

const argument = require('minimist')(process.argv.slice(2));

const IDENTIFIER_TYPE = 'identifier';
const SELECTOR_TYPE = 'selector';
const RULE_TYPE = 'rule';
const INTERPOLATION_TYPE = 'interpolation';
const PSEUDO_CLASS_TYPE = 'pseudo_class';
const CHILD_HOST_CLASS = 'child-host';
const ATTRIBUTE_TYPE = 'attribute';

@Gulpclass()
export class Gulpfile {

  private setHost(nodes: Node[], host: string) {
    const html = nodes;
    for (let i = 0; i < html.length; i++) {
      const h = html[i];
      if (h['tagName'] && !h['tagName'].startsWith('ng-')) {
        h['rawAttrs'] = `child-of="${host}" ` + h['rawAttrs'];
      }
      h.childNodes = this.setHost(h.childNodes, host);
    }
    return html;
  }

  private encapsulateHTML(url: string, dir: string, host: string) {
    const templateName = path.parse(url).name;
    const templateContent = fs.readFileSync(`${dir}/${templateName}.html`, 'utf8');

    if (!!templateContent) {
      const html = parse(templateContent) as HTMLElement;

      html.childNodes = this.setHost(html.childNodes, host);
      html.set_content(html.toString());
      fs.writeFileSync(`${dir}/encapsulated.html`, html);
    }
  }

  private encapsulateSCSS(urls: string[], dir: string, host: string) {
    if (!!urls) {
      urls.forEach(style => {
        const styleContent = fs.readFileSync(`${dir}/${path.parse(style).name}.scss`, 'utf8');

        if (!!styleContent && host === 'jnt-button-host') {
          const $ = createQueryWrapper(scssParce(styleContent));

          const query = $(n => n.node.type === IDENTIFIER_TYPE && n.parent.node.type === SELECTOR_TYPE
            || (n.node.type === ATTRIBUTE_TYPE && n.parent.node.value[0].value !== '&'));

          query.nodes.forEach((n, index) => {
            let currentHost = null;
            const currentQuery = query.eq(index);
            currentQuery.closest(parent => {
              if (parent.node.type === RULE_TYPE) {
                let childs = parent.children[0].node.value.filter(node => node.type === PSEUDO_CLASS_TYPE);
                if (!!childs.length) {
                  const childHost = childs[0].value.filter(child => child.value === CHILD_HOST_CLASS);
                  if (!!childHost.length) {
                    childs = childs[0].value.filter(child => child.type === INTERPOLATION_TYPE);
                    if (!!childs.length) {
                      currentHost = childs[0].value[0].value;
                      const val = currentQuery.next(node => node.node.type === PSEUDO_CLASS_TYPE).value();
                      if (val.indexOf(CHILD_HOST_CLASS) !== -1) {
                        currentQuery.next().replace(() => ({value: `[child-of=#{$${host}}]`}));
                        currentQuery.after({value: `[host=#{$${currentHost}}]`});
                        currentHost = 'none';
                      }
                    }
                  }
                }
              }
              return !!currentHost;
            });

            if (!!currentHost && currentHost !== 'none') {
              currentQuery.after({value: `[child-of=#{$${currentHost}}]`});
            } else if (currentHost !== 'none') {
              currentQuery.after({value: `[host=#{$${host}}]`});
            }
          });

          const hostQuery = $(n => n.node.type === IDENTIFIER_TYPE
            && n.parent.node.type === PSEUDO_CLASS_TYPE
            && n.node.value === 'host');
          hostQuery.parent().before({value: host.replace('-host', '')});
          hostQuery.parent().replace(() => ({value: `[host=#{$${host}}]`}));

          fs.writeFileSync(`${dir}/encapsulated.scss`, stringify($().get(0)));
        }
      });
    }
  }

  @Task()
  components() {
    return gulp.src(['../components/**/*.ts'])
      .pipe(/*debug(), */map((file, cb) => {
        const context = require(file.path);

        for (const key in context) {
          if (!context.hasOwnProperty(key)) {
            continue;
          }

          const component = new context[key]();
          if (component.host) {
            const directory = path.parse(file.path).dir;
            const readDirectory = readdirSync(directory);
            const template = readDirectory.filter((elm) => elm.indexOf('.component.html') > -1)[0];
            const style = readDirectory.filter((elm) => elm.indexOf('.component.scss') > -1);
            this.encapsulateHTML(template, directory, component.host);
            this.encapsulateSCSS(style, directory, component.host);
          }
        }
        return cb();
      }));
  }

  @SequenceTask()
  build() {
    const listTask = ['components'];

    if (argument.watch) {
      listTask.push('watch');
    }

    return listTask;
  }

  @Task()
  watch() {
    return watch(['../components/**/*.component.html', '../components/**/*.component.scss'], () => this.components());
  }
}
