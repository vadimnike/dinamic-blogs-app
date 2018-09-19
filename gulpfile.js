'use strict';

var gulp = require('gulp');


// scss variables
var sass = require('gulp-sass');

// postcss variables
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var cssnano      = require('gulp-cssnano');

var paths = {
  css      : ['./src/markup/css/**/*.css'],
  scss     : ['./src/markup/scss/**/*.scss']
};


gulp.task('scss', function () {
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write({includeContent: false}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(postcss([autoprefixer({ browsers: ['ie >= 10', 'last 4 versions', '> 5%'] }) ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/markup/css'));
});

gulp.task('css:minify', function () {
  return gulp.src(paths.css)
    .pipe(cssnano())
    .pipe(postcss([autoprefixer({ browsers: ['ie >= 10', 'last 4 versions', '> 5%'] }) ]))
    .pipe(gulp.dest('src/markup/css'));
});

gulp.task('watcher', function () {
  gulp.watch(paths.scss, ['scss']);
});

gulp.task('webserver', function() {
  webserver.server({
    root: './',
    port: 8000
  });
});

gulp.task('build', ['css:minify'], function () {
  console.log('Build success');
});

