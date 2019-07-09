const gulp = require('gulp');
const clean = require('gulp-clean');
const path = require('path');
const map = require('map-stream');
const hash = require('gulp-hash');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const themeFiles = "src/assets/themes/*.scss";
const themeCSSFiles = "src/assets/themes/*.css";
const scriptFile = "src/assets/themes/themes.js";
const assetsStyleFiles = 'projects/junte-ui/src/lib/assets/styles/*.scss';
const styleFiles = 'projects/junte-ui/src/lib/components/**/*.scss';

let themes = {};

gulp.task('themes:clean', function () {
  return gulp.src([themeCSSFiles], {read: false})
    .pipe(clean());
});

gulp.task('themes:hash', function () {
  themes = {};
  return gulp.src([themeFiles])
    .pipe(hash({hashLength: 10, template: '<%= name %>.<%= hash %><%= ext %>'}))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('src/assets/themes'))
    .pipe(map((file, cb) => {
      const name = path.basename(file.path, '.css');
      const theme = name.split(".");
      themes[theme[0]] = theme[1];
      return cb(null, file);
    }))
});

gulp.task('themes:script', function () {
  return gulp.src([scriptFile])
    .pipe(map((file, cb) => {
      const content = file.contents.toString();
      const str = `themes = ${JSON.stringify(themes)}`;
      file.contents = new Buffer(content.replace(/themes = \{.*\}/, str));
      return cb(null, file);
    }))
    .pipe(gulp.dest('src/assets/themes'))
});

gulp.task('themes', gulp.series(['themes:clean', 'themes:hash', 'themes:script']));

gulp.task('themes:watch', function() {
  return gulp.watch([themeFiles, assetsStyleFiles, styleFiles], { ignoreInitial: false }, gulp.series('themes'));
});
