'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const exec = require('child_process').exec;
const browserSync = require('browser-sync');
const clean = require('gulp-clean');
const rename = require('gulp-rename');

const ENV = require('./environment');

gulp.task('browser-sync', function() {
    // var port = process.env.PORT || 3000;
    browserSync.init({
      // see http://www.browsersync.io/docs/options/
      server: {
          baseDir: './build'
      }
    });
  });

gulp.task('sass', function () {
  return gulp.src('./src/styles/**/style.scss')
    .pipe(sass({
        outputStyle: 'compressed',
        includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(rename(ENV.styleName))
    .pipe(gulp.dest('./public'));
});

gulp.task('nodemon', function (cb) {
    exec('nodemon app.js', function (err, stdout, stderr) {
      // console.log(stderr);
      cb(err);
    });
  })

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('./src/**/*.js', ['nodemon']);
    gulp.watch('./src/**/*.scss', ['sass']);
    gulp.watch('./build/**/*.*', browserSync.reload);
    gulp.watch('./app.js', browserSync.reload);
});

gulp.task('clean:images', function () {
  return gulp.src('./images/**/*', {read: false})
      .pipe(clean());
});

gulp.task('clean:build', function () {
  return gulp.src('./build', {read: false})
      .pipe(clean());
});

gulp.task('clean', ['clean:images', 'clean:build']);

gulp.task('dev', ['nodemon', 'sass']);

gulp.task('default', ['dev', 'watch']);
