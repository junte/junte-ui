import * as fs from 'fs';
import * as gulp from 'gulp';
import * as debug from 'gulp-debug';
import { Gulpclass, SequenceTask, Task } from 'gulpclass';
import * as map from 'map-stream';
import * as path from 'path';
import 'reflect-metadata';

const argument = require('minimist')(process.argv.slice(2));
const styleFiles = '../lib/components/**/**/*.encapsulated.scss';
const buildFiles = '../lib/components/**/**/build.json';

class Component {
  constructor(public section: string, public name: string) {
  }
}

class Composition {
  section: string;
  pathFrom: string;
  pathTo: string;
  from: string[];
  to: string;
}

class Builder {
  composition: Composition;
}

@Gulpclass()
export class Gulpfile {

  private components: Component[] = [];

  private clearImports(content: string) {
    return content.replace(/@import.*$/gm, '').replace(/(\n){2,}/gm, '\n');
  }

  @Task()
  componentsStyle() {
    return gulp.src(['../lib/assets/styles/components.scss'])
      .pipe(map((file, cb) => {
        const filePath = file.path.replace('projects/junte-ui/src/lib', 'dist/junte-ui/lib');
        let contents = '';
        this.components.forEach(component => contents += `@import './components/${component.section}/${component.name}';\n`);
        fs.writeFileSync(filePath, contents);
        return cb(null, file);
      }));
  }

  @Task()
  styles() {
    return gulp.src([buildFiles])
      .pipe(debug())
      .pipe(map((file, cb) => {
        const composition = (JSON.parse(file.contents.toString()) as Builder).composition;
        if (!!composition) {
          const from = path.normalize(`${path.dirname(file.path)}/${composition.pathFrom}`);
          const to = path.normalize(`${path.dirname(file.path)}/${composition.pathTo}`);
          let content = '';

          composition.from.forEach(scss => content +=
            (fs.readFileSync(`${from}/${composition.section}/${scss}`).toString() + '\n\r'));

          if (!fs.existsSync(`${to}/${composition.section}`)) {
            fs.mkdirSync(`${to}/${composition.section}`, {recursive: true});
            fs.writeFileSync(`${to}/${composition.section}.scss`, '');
          }

          fs.writeFileSync(`${to}/${composition.section}/${composition.to}`,
            `@import "../../variables";\n${this.clearImports(content)}`);

          fs.appendFileSync(`${to}/${composition.section}.scss`,
            `@import "./${composition.section}/${composition.to}";\n`);

          this.components.push(new Component(composition.section, composition.to));
        }
        return cb(null, file);
      }));
  }

  @SequenceTask()
  build() {
    const listTask = ['styles', 'componentsStyle'];

    if (argument.watch) {
      listTask.push('watch');
    }

    return listTask;
  }

  @Task()
  watch() {
    return gulp.watch([styleFiles, buildFiles], {ignoreInitial: true}, gulp.series('styles'));
  }
}
