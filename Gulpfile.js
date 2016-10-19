'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('./app/static/maps'))
        .pipe(gulp.dest('./app/static/css'))
        .resume();
});

gulp.task('sass:watch', ['sass'], function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
});
