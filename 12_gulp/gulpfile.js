const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');


function style() {
    return gulp.src('./src/style/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src'))
}


function watch() {
    gulp.watch('./src/style/**/*.scss', style)
}

function server() {
    gulp.src('src')
        .pipe(webserver({
            host: 'localhost',
            port: 8080,
            livereload: true,
            directoryListing: true,
            open: true
        }));
}


exports.default = gulp.series(style, watch, server)