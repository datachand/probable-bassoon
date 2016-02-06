import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import uglify from 'gulp-uglify';
import cssnano from 'gulp-cssnano';
import sourcemaps from 'gulp-sourcemaps';

(() => {

    'use strict';

    const sass_options = {
        outputStyle: 'compressed',
        errLogToConsole: true
    };

    gulp.task('default', () => {

    });

    gulp.task('sass', () => {
        gulp.src('./**/*.scss')
            .pipe(sass(sass_options))
            .pipe(gulp.dest('./dist'));
    });

})()
