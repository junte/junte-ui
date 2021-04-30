import * as gulp from 'gulp';
import * as todo from 'gulp-todo';
import { Gulpclass, SequenceTask, Task } from 'gulpclass';

@Gulpclass()
export class Gulpfile {

  @Task()
  todos() {
    return gulp.src([
      'src/**/*.{ts,html,scss}',
      'projects/junte-ui/src/**/*.{ts,html,scss}'
    ], {base: '.'})
      .pipe(todo())
      .pipe(gulp.dest('./'));
  }

  @SequenceTask()
  build() {
    return ['todos'];
  }
}
