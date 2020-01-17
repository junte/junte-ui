import * as fs from 'fs';
import * as gulp from 'gulp';
import { Gulpclass, SequenceTask, Task } from 'gulpclass';
import * as map from 'map-stream';
import * as path from 'path';
import 'reflect-metadata';

const argument = require('minimist')(process.argv.slice(2));
const styleFiles = '../lib/components/**/**/*.encapsulated.scss';
const buildFiles = '../lib/components/**/**/build.json';

class Component {
  constructor(public group: string, public name: string) {
  }
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
        this.components.forEach(component => contents += `@import './components/${component.group}/${component.name}';\n`);
        fs.writeFileSync(filePath, contents);
        return cb(null, file);
      }));
  }

  @Task()
  styles() {
    return gulp.src([buildFiles])
      .pipe(map((file, cb) => {
        const build = JSON.parse(file.contents.toString());
        const filePath = file.path.replace('projects/junte-ui/src/lib', 'dist/junte-ui/lib/assets/styles');
        const dir = path.dirname(filePath).substr(0, path.dirname(filePath).lastIndexOf('components/') + 10);
        let content = '';

        build.scss.files.forEach(f => content += (fs.readFileSync(`${path.dirname(file.path)}/${f}`).toString() + '\n\r'));
        const groupPath = `${dir}/${build.scss.path}`;
        if (!fs.existsSync(groupPath)) {
          fs.mkdirSync(groupPath, {recursive: true});
        }

        fs.writeFileSync(`${groupPath}/${build.scss.name}.scss`, `@import "../../variables";\n${this.clearImports(content)}`);
        this.components.push(new Component(build.scss.path, build.scss.name));
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
    return gulp.watch([styleFiles, buildFiles], {ignoreInitial: false}, gulp.series('styles'));
  }
}
