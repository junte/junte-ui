const gulp = require('gulp');
const themeFiles = "src/assets/themes/*.scss";
const indexFile = "src/index.html";
const path = require('path');
const map = require('map-stream');
const hash = require('gulp-hash');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
let themes = {};

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

gulp.task('themes:index', function () {
  return gulp.src([indexFile])
    .pipe(map((file, cb) => {
      const content = file.contents.toString();
      const str = `const themes = ${JSON.stringify(themes)}`;
      file.contents = new Buffer(content.replace(/const themes = \{.*\}/, str));
      return cb(null, file);
    }))
    .pipe(gulp.dest('src/'))
});

gulp.task('themes', gulp.series(['themes:hash', 'themes:index']));
