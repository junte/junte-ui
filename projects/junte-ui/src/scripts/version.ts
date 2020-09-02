import * as fs from 'fs';
import * as gulp from 'gulp';
import { Gulpclass, SequenceTask, Task } from 'gulpclass';
import * as map from 'map-stream';
import * as path from 'path';
import 'reflect-metadata';

const versionFile = 'VERSION';
const packageFile = 'package.json';

@Gulpclass()
export class Gulpfile {

  @Task()
  version() {
    return gulp.src([packageFile])
      .pipe(map((file, cb) => {
        let content = file.contents.toString();
        let version = fs.readFileSync(`${path.dirname(file.path)}/${versionFile}`).toString().trim();

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
