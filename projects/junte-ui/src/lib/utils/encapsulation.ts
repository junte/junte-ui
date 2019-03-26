import {Gulpclass, SequenceTask, Task} from 'gulpclass';
import * as gulp from 'gulp';
import * as map from 'map-stream';
import * as path from 'path';
import * as fs from 'fs';
import * as debug from 'gulp-debug';
import 'reflect-metadata';
import {HTMLElement, Node, parse} from 'node-html-parser';
import {parse as scssParce, stringify} from 'scss-parser';
import * as watch from 'gulp-watch';
import * as createQueryWrapper from 'query-ast';

const argument = require('minimist')(process.argv.slice(2));

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

  @Task()
  components() {
    return gulp.src(['../components/*/*.ts'])
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
            const templateName = path.parse(annotations.templateUrl).name;
            const templateContent = fs.readFileSync(`${dir}/${templateName}.html`, 'utf8');

            if (!!annotations.styleUrls) {
              annotations.styleUrls.forEach(style => {
                const styleContent = fs.readFileSync(`${dir}/${path.parse(style).name}.scss`, 'utf8');

                if (!!styleContent) {
                  const $ = createQueryWrapper(scssParce(styleContent));

                  let query = $(n => n.node.type === 'identifier' && n.parent.node.type === 'selector');
                  query.before({value: `[host=#{$${component.host}}]`});

                  query = $(n => n.node.type === 'identifier' && n.parent.node.type === 'pseudo_class' && n.node.value === 'host');
                  query.parent().replace(() => ({value: `[host=#{$${component.host}}]`}));

                  query = $(n => n.node.type === 'identifier' && n.parent.node.type === 'attribute');
                  query.parent().before({value: `[host=#{$${component.host}}]`});

                  // console.log(stringify($().get(0)));
                  fs.writeFileSync(`${dir}/encapsulated.scss`, stringify($().get(0)));
                }
              });
            }

            if (!!templateContent) {
              const html = parse(templateContent) as HTMLElement;

              html.childNodes = this.setHost(html.childNodes, component.host);
              html.set_content(html.toString());
              fs.writeFileSync(`${dir}/encapsulated.html`, html);
            }
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
    return watch('../components/*/*.component.html', () => this.components());
  }
}
