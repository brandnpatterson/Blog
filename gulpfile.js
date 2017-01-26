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
  browserSync.init(['index.php', 'dist/css/*', 'dist/includes/*'], {
    proxy: 'localhost:8888/surge%20blog',
    notify: false
  });
});

gulp.task('default', ['mamp','browser-sync'], function () {});
