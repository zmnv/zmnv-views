'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const exec = require('child_process').exec;
const browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    var port = process.env.PORT || 3000;
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
    .pipe(gulp.dest('./build'));
});

gulp.task('clean', function (cb) {
  exec('rm -rf ./build', function (err, stdout, stderr) {
    // console.log(stderr);
    cb(err);
  });
})

gulp.task('run', function (cb) {
    exec('node app.js', function (err, stdout, stderr) {
      // console.log(stderr);
      cb(err);
    });
  })

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('./src/**/*.js', ['run']);
    gulp.watch('./src/styles/**/*.scss', ['sass']);
    gulp.watch('./build/**/*.*', browserSync.reload);
});

gulp.task('default', ['build', 'watch']);
gulp.task('build', ['run', 'sass']);
