import * as gulp from 'gulp';
import * as debug from 'gulp-debug';
import * as sass from 'gulp-sass';
import { Gulpclass, SequenceTask, Task } from 'gulpclass';
import 'reflect-metadata';

const argument = require('minimist')(process.argv.slice(2));

@Gulpclass()
export class Gulpfile {

  @Task()
  styles() {
    return gulp.src(['./*.scss'])
      .pipe(debug())
      .pipe(sass({
        // outputStyle: 'compressed',
        includePaths: ['../dist/junte-ui/lib/assets/styles'],
        onError: console.error.bind(console, 'Sass error:')
      }))
      .pipe(gulp.dest('./dist'));
  }

  @SequenceTask()
  build(done) {
    const tasks = ['styles'];
    if (argument.watch) {
      tasks.push('watch');
    }
    done();
    return tasks;
  }

  @Task()
  watch(done) {
    done();
    return gulp.watch(['./*.scss'], {ignoreInitial: true}, gulp.series('styles'));
  }
}
