const gulp = require('gulp');
const clean = require('gulp-clean');
const path = require('path');
const map = require('map-stream');
const hash = require('gulp-hash');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const themeFiles = "src/assets/themes/*.scss";
const themeCSSFiles = "src/assets/themes/*.css";
const indexFile = "src/index.html";
const styleFiles = 'projects/junte-ui/src/lib/assets/styles/*.scss';

let themes = [];

gulp.task('themes:clean', function () {
  return gulp.src([themeCSSFiles], {read: false})
    .pipe(clean());
});

gulp.task('themes:hash', function () {
  themes = [];
  return gulp.src([themeFiles])
    .pipe(hash({hashLength: 10, template: '<%= name %>.<%= hash %><%= ext %>'}))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('src/assets/themes'))
    .pipe(map((file, cb) => {
      const name = path.basename(file.path, '.css');
      const theme = name.split(".");
      themes.push({name: theme[0], hash: theme[1]});
      return cb(null, file);
    }))
});

gulp.task('themes:index', function () {
  return gulp.src([indexFile])
    .pipe(map((file, cb) => {
      const content = file.contents.toString();
      const str = `const themes = {${themes.map(theme => `${theme.name}: '${theme.hash}'`).join(', ')}}`;
      file.contents = new Buffer(content.replace(/const themes = \{.*\}/, str));
      return cb(null, file);
    }))
    .pipe(gulp.dest('src/'))
});

gulp.task('themes', gulp.series(['themes:clean', 'themes:hash', 'themes:index']));

gulp.task('themes:watch', function() {
  return gulp.watch([themeFiles, styleFiles], { ignoreInitial: false }, gulp.series('themes'));
});
