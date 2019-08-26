import { writeFileSync } from 'fs';
import * as gulp from 'gulp';
import { Gulpclass, SequenceTask, Task } from 'gulpclass';
import * as map from 'map-stream';
import 'reflect-metadata';

const argument = require('minimist')(process.argv.slice(2));
const styleFiles = '../lib/components/**/{common,*.encapsulated}.scss';

@Gulpclass()
export class Gulpfile {

  @Task()
  styles() {
    return gulp.src([styleFiles], {'base': 'src/lib/components'})
      .pipe(map((file, cb) => {
        const contents = file.contents.toString();
        try {
          writeFileSync(file.path.replace('projects/junte-ui/src', 'dist/junte-ui', './dist/junte-ui'), contents);
        } catch (error) {
          console.log(error);
        }
        return cb(null, file);
      }));
  }

  @SequenceTask()
  build() {
    const listTask = ['styles'];

    if (argument.watch) {
      listTask.push('watch');
    }

    return listTask;
  }

  @Task()
  watch() {
    return gulp.watch([styleFiles], {ignoreInitial: false}, gulp.series('styles'));
  }
}
