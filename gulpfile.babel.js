import gulp       from 'gulp';
import concat     from 'gulp-concat';
import del        from 'del';
import eslint     from 'gulp-eslint';
import load       from 'gulp-load-plugins';
import prefix     from 'gulp-autoprefixer';
import pug        from 'gulp-pug';
import rename     from 'gulp-rename';
import sass       from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import sync       from 'browser-sync';

var $ = load();
var reload = sync.reload;

gulp.task('clean', del.bind(null, ['index.html', 'style.css', 'dist/views/*', 'dist/*.js'], {read: false}));

gulp.task('default', ['html', 'styles', 'scripts', 'lint'], () => {
  gulp.start('serve')
  gulp.watch('app/pug/*', ['html', reload])
  gulp.watch('app/sass/**/*', ['styles', reload])
  gulp.watch('app/js/**/*', ['scripts', reload]);
});

gulp.task('html', ['html:views'], () => {
  return gulp.src('app/pug/index.pug')
    .pipe(sourcemaps.init())
    .pipe(pug())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./'));
});

gulp.task('html:views', () => {
  return gulp.src(['!app/pug/head.pug', '!app/pug/index.pug', 'app/pug/*.pug'])
    .pipe(sourcemaps.init())
    .pipe(pug())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/views'));
});

gulp.task('images', () => {
  return gulp.src('app/images/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('lint', () => {
  return gulp.src(['*/**/*.js', '!node_modules/*', '!test/*'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('scripts', () => {
  return gulp.src(['app/js/hash.js', 'app/js/arrows.js', 'app/js/slide.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('index.js'))
    .pipe($.babel())
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('serve', () => {
  sync({
    notify: false,
    server: {
      baseDir: './'
    },
    port: 8888
  });
});

gulp.task('styles', () => {
  return gulp.src('app/sass/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(prefix('last 2 versions'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./'));
});
