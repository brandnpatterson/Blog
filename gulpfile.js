var gulp = require('gulp');
var browserSync = require('browser-sync');
var mamp = require('gulp-mamp');
var options = {};

// browser-sync
gulp.task('browser-sync', function() {
  browserSync.init(['index.php', 'dist/css/*', 'dist/includes/*'], {
    proxy: 'localhost:8888/surge%20blog',
    notify: false
  });
});

// default task
gulp.task('default', ['mamp','browser-sync']);

// start mamp server
gulp.task('mamp', ['start']);

gulp.task('start', function(cb){
    mamp(options, 'start', cb);
});

// stop mamp server
gulp.task('stop', function(cb){
    mamp(options, 'stop', cb);
});
