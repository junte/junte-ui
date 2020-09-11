import * as fs from 'fs';
import * as gulp from 'gulp';
import { Gulpclass, SequenceTask, Task } from 'gulpclass';
import * as map from 'map-stream';
import * as path from 'path';
import 'reflect-metadata';

const VERSION_FILE = 'VERSION';
const PACKAGE_FILE = 'package.json';

@Gulpclass()
export class Gulpfile {

  @Task()
  version() {
    return gulp.src([PACKAGE_FILE])
      .pipe(map((file, cb) => {
        let content = file.contents.toString();
        const version = fs.readFileSync(`${path.dirname(file.path)}/${VERSION_FILE}`).toString().trim();
        if (!!version) {
          content = content.replace('"version": "0.0.0"', `"version": "${version}"`);
          file.contents = Buffer.from(content);
        }
        return cb(null, file);
      }))
      .pipe(gulp.dest('./'));
  }

  @SequenceTask()
  build() {
    return ['version'];
  }
}
