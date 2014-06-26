/**
 * Created by yuchennie on 6/23/14.
 */
var gulp = require('gulp');
var karma = require('gulp-karma');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');

var testFiles = [
    'src/js/*.js',
    'src/test/*.spec.js'
];

gulp.task('test', function() {
    // Be sure to return the stream
    return gulp.src(['This shouldn'])
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
});

gulp.task('js', function (){
    gulp.src(['./src/js/*.js','./src/js/**/*.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});

gulp.task('connect', function(){
    connect.server({
        livereload:true,
        port:8000
    });
});

gulp.task('jshint', function(){
    gulp.src(['./src/js/*.js','./src/js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function(){
    gulp.watch(['./src/js/*.js','./src/js/**/*.js'],['js']);
});