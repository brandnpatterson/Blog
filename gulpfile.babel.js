import       gulp from "gulp"
import     concat from "gulp-concat"
import        del from "del"
import     eslint from "gulp-eslint"
import       load from "gulp-load-plugins"
import     prefix from "gulp-autoprefixer"
import        pug from "gulp-pug"
import     rename from "gulp-rename"
import       sass from "gulp-sass"
import sourcemaps from "gulp-sourcemaps"
import       sync from "browser-sync"

const $ = load()
const reload = sync.reload

gulp.task('build', ['index', 'html', 'pug-pretty', 'lint'])

gulp.task('clean', del.bind(null, ['index.html', 'style.css', 'app/assets/views/*.html', 'dist/views/*', 'dist/*.min.js'], {read: false}))

gulp.task('default', ['build', 'watch'], () => {
  gulp.start('serve')
})

gulp.task('fonts', () => {
  gulp.src(['app/assets/fonts/*.eot', 'app/assets/fonts/*.svg','app/assets/fonts/*.ttf', 'app/assets/fonts/*.woff', 'app/assets/fonts/*.woff2'])
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('html', () => {
  return gulp.src(['!app/pug/head.pug', 'app/pug/*.pug'])
    .pipe(sourcemaps.init())
    .pipe(pug())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/views'))
})

gulp.task('index', ['scripts', 'styles'], () => {
  return gulp.src('app/pug/index.pug')
    .pipe(sourcemaps.init())
    .pipe(pug())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./'))
})

gulp.task('images', () => {
  return gulp.src('app/assets/images/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/images'))
})

gulp.task('lint', () => {
  return gulp.src(['*/**/*.js', '!node_modules/*', '!test/*'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task('pug-pretty', () => {
  return gulp.src(['!app/pug/head.pug', 'app/pug/*.pug'])
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('app/assets/views'))
})

gulp.task('scripts', () => {
  return gulp.src(['app/js/hash.js', 'app/js/arrows.js', 'app/js/slide.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('index.js'))
    .pipe($.babel())
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
})

gulp.task('serve', () => {
  sync({
    notify: false,
    server: {
      baseDir: './'
    },
    port: 8888
  })
})

gulp.task('styles', () => {
  gulp.src('app/css/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(prefix('last 2 versions'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./'))
})

gulp.task('watch', () => {
  gulp.watch('app/pug/*', ['index', 'html', 'pug-pretty', reload])
  gulp.watch('app/css/**/*', ['styles', reload])
  gulp.watch('app/js/**/*', ['scripts', reload])
})
