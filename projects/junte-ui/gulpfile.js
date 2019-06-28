const gulp = require('gulp');
const watch = require('gulp-watch');
const iconfont = require('gulp-iconfont');
const consolidate = require('gulp-consolidate');
const rename = require('gulp-rename');
const iconFiles = "src/lib/assets/images/icons/*.svg";
const styleFiles = "src/lib/components/**/*.scss";
const commonStyleFiles = "!src/lib/components/**/*.component.scss";
const runTimeStamp = Math.round(Date.now() / 1000);
const fs = require('fs');
const map = require('map-stream');

gulp.task('iconfont', function () {
  return gulp.src([iconFiles])
    .pipe(iconfont({
      fontName: 'icons',
      prependUnicode: true,
      formats: ['ttf', 'woff', 'svg', 'eot', 'woff2'],
      timestamp: runTimeStamp,
      normalize: true,
      fontHeight: 1001,
      appendCodepoints: true
    }))
    .on('glyphs', function (glyphs, options) {
      glyphs.forEach(function (glyph, idx, arr) {
        arr[idx].unicode[0] = glyph.unicode[0].charCodeAt(0).toString(16);
      });
      gulp.src('src/lib/assets/styles/_icons-template.scss')
        .pipe(consolidate('lodash', {
          glyphs: glyphs,
          fontName: 'icons',
          fontPath: '../fonts/icons/',
          className: 'icon'
        }))
        .pipe(rename('icons.scss'))
        .pipe(gulp.dest('src/lib/assets/styles/'))
    })
    .pipe(gulp.dest('src/lib/assets/fonts/icons/'))
});

gulp.task('styles', function () {
  return gulp.src([styleFiles, commonStyleFiles], {"base": "src/lib/components"})
    .pipe(map((file, cb) => {
      const contents = file.contents.toString();
      try {
        fs.writeFileSync(file.path.replace('projects/junte-ui/src', 'dist/junte-ui', './dist/junte-ui'), contents);
      } catch (error) {
        console.log(error);
      }
      return cb(null, file);
    }))
});

gulp.task('styles:watch', function() {
  return gulp.watch([styleFiles, commonStyleFiles], { ignoreInitial: false }, gulp.series('styles'));
});
