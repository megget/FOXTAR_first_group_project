const gulp = require('gulp');
var rename = require("gulp-rename");
var csso = require('gulp-csso');

var browserSync = require('browser-sync').create();
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('default',  function () {
  var postcss = require('gulp-postcss');
  var concat = require('gulp-concat');
  var autoprefixer = require('autoprefixer');
  return gulp.src('./css/*.css')
    .pipe(concat('style-all.css'))
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename({
      basename: "style",
      suffix: ".min",
    }))
    .pipe(gulp.dest('./docs/css'));
});