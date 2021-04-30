import * as fs from 'fs';
import * as gulp from 'gulp';
import { Gulpclass, SequenceTask, Task } from 'gulpclass';
import * as map from 'map-stream';
import * as path from 'path';
import 'reflect-metadata';

const argument = require('minimist')(process.argv.slice(2));
const BASE_FILES = './src/lib/assets/styles/*.scss';
const COMPONENTS_FILES = './src/lib/assets/styles/**/*.scss';
const BUILD_FILES = './src/lib/**/build.json';

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

  private clearImports(content: string, section: string, to: string) {
    let imports = content.match(/@import.*$/gm);
    imports = imports.filter(file => !file.includes('jnt-variables')
      && !file.includes(`${section}/${to.replace('.scss', '').replace('_', '')}`));

    const clean = file => file.replace(/";|';/, '').replace(/@import ["|']/, '@import \'../').split('/');
    imports = [...(new Set(imports.map(file => clean(file).slice(0, 3).join('/') + '\';')))];

    let cleared = content
      .replace(/@import.*$/gm, '')
      .replace(/(\n){2,}/gm, '\n');
    imports.forEach(file => cleared = `${file}\n${cleared}`);
    return `@import '../jnt-variables';\n${cleared}`;
  }

  @Task()
  mixins() {
    return gulp.src(['./src/lib/assets/styles/_jnt-mixins.scss'])
      .pipe(map((file, cb) => {
        const contents = [];
        this.components.forEach(component => contents.push(`@import './${component.section}/${component.name}';`));
        fs.writeFileSync('./../../dist/junte-ui/lib/assets/styles/_jnt-mixins.scss', contents.join('\r\n'));
        return cb(null, file);
      }));
  }

  @Task()
  styles() {
    return gulp.src([BUILD_FILES])
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
            this.clearImports(content, composition.section, composition.to));

          fs.appendFileSync(`${to}/${composition.section}.scss`,
            `@import "./${composition.section}/${composition.to}";\n`);

          this.components.push(new Component(composition.section, composition.to));
        }
        return cb(null, file);
      }));
  }

  @Task()
  base() {
    return gulp.src([BASE_FILES])
      .pipe(gulp.dest('../../dist/junte-ui/lib/assets/styles'));
  }

  @SequenceTask()
  build(done) {
    const tasks = ['styles', 'mixins'];
    if (argument.watch) {
      tasks.push('watch');
    }
    done();
    return tasks;
  }

  @Task()
  watch(done) {
    done();
    return gulp.watch([BASE_FILES, COMPONENTS_FILES, BUILD_FILES],
      {ignoreInitial: true}, gulp.series('styles', 'base', 'mixins'));
  }
}
