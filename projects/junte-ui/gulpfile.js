var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var rename = require('gulp-rename');
var iconFiles = "src/lib/assets/images/icons/*.svg";
var runTimeStamp = Math.round(Date.now() / 1000);

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
        .pipe(rename('_icons.scss'))
        .pipe(gulp.dest('src/lib/assets/styles/'))
    })
    .pipe(gulp.dest('src/lib/assets/fonts/icons/'))
});
