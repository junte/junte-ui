import { Gulpclass, SequenceTask, Task } from 'gulpclass';
import * as gulp from 'gulp';
import * as map from 'map-stream';
import * as path from 'path';
import * as fs from 'fs';
import * as debug from 'gulp-debug';
import 'reflect-metadata';
import { HTMLElement, Node, parse } from 'node-html-parser';
import { parse as scssParce, stringify } from 'scss-parser';
import * as watch from 'gulp-watch';
import * as createQueryWrapper from 'query-ast';
import { readdirSync } from 'fs';

const argument = require('minimist')(process.argv.slice(2));

const IDENTIFIER_TYPE = 'identifier';
const SELECTOR_TYPE = 'selector';
const PSEUDO_CLASS_TYPE = 'pseudo_class';
const ATTRIBUTE_TYPE = 'attribute';

@Gulpclass()
export class Gulpfile {

  private setHost(nodes: Node[], host: string) {
    const html = nodes;
    for (let i = 0; i < html.length; i++) {
      const h = html[i];
      if (h['tagName'] && !h['tagName'].startsWith('ng-')) {
        h['rawAttrs'] += ` host="${host}"`;
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

        if (!!styleContent) {
          const $ = createQueryWrapper(scssParce(styleContent));

          let query = $(n => n.node.type === IDENTIFIER_TYPE && n.parent.node.type === SELECTOR_TYPE);
          query.before({value: `[host=#{$${host}}]`});

          query = $(n => n.node.type === IDENTIFIER_TYPE && n.parent.node.type === PSEUDO_CLASS_TYPE && n.node.value === 'host');
          query.parent().replace(() => ({value: `[host=#{$${host}}]`}));

          query = $(n => n.node.type === IDENTIFIER_TYPE && n.parent.node.type === ATTRIBUTE_TYPE);
          query.parent().before({value: `[host=#{$${host}}]`});

          fs.writeFileSync(`${dir}/encapsulated.scss`, stringify($().get(0)));
        }
      });
    }
  }

  @Task()
  components() {
    return gulp.src(['../components/**/*.ts'])
      .pipe(debug())
      .pipe(map((file, cb) => {
        const context = require(file.path);

        for (const key in context) {
          if (!context.hasOwnProperty(key)) {
            continue;
          }

          const component = new context[key]();
          if (component.host) {
            const dir = path.parse(file.path).dir;
            const annotations = context[key].__annotations__[0];
            const dirCont = readdirSync(dir);
            const template = dirCont.filter((elm) => elm.indexOf('.component.html') > -1)[0];
            const style = dirCont.filter((elm) => elm.indexOf('.component.scss') > -1);
             this.encapsulateHTML(template, dir, component.host);
             this.encapsulateSCSS(style, dir, component.host);
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
