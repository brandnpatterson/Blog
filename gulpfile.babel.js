var gulp = require('gulp');
var browserSync = require('browser-sync');
var mamp = require('gulp-mamp');

var options = {};

gulp.task('start', function(cb){
    mamp(options, 'start', cb);
});

gulp.task('stop', function(cb){
    mamp(options, 'stop', cb);
});

gulp.task('mamp', ['start']);

gulp.task('browser-sync', function() {
  browserSync.init(['dist/css/*.css', 'dist/js/*.js', 'index.php'], {
    proxy: 'localhost:8888/surge-blog-php',
    notify: false
  });
});

gulp.task('default', ['mamp','browser-sync'], function () {});
