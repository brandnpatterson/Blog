/* eslint-env node */

import      gulp from "gulp"
import    concat from "gulp-concat"
import       del from "del"
import    eslint from "gulp-eslint"
import      load from "gulp-load-plugins"
import    prefix from "gulp-autoprefixer"
import    rename from "gulp-rename"
import      sass from "gulp-sass"
import      sync from "browser-sync"

const $ = load()
const reload = sync.reload

gulp.task('build', ['html', 'lint', 'fonts', 'images'])

gulp.task('clean', del.bind(null, ['index.html', 'app/js/**.min.js', 'dist/css/style.min.css', 'dist/fonts', 'dist/images', 'dist/index.html', 'dist/js/main.min.js'], {read: false}))

gulp.task('default', ['html', 'lint', 'fonts', 'images', 'watch'], () => {
  gulp.start('serve')
})

gulp.task('fonts', () => {
  gulp.src(['app/fonts/**.eot', 'app/fonts/**.svg','app/fonts/**.ttf', 'app/fonts/**.woff'])
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('html', ['scripts', 'styles'], () => {
  return gulp.src('app/*.html')
    .pipe($.useref({searchPath: ['app']}))
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'))
})

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/images'))
})

gulp.task('lint', () => {
  return gulp.src(['*/**/*.js', '!node_modules/**', '!test/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task('rb', ['clean', 'default'], () => {

})

gulp.task('scripts', () => {
  return gulp.src('app/js/*.js')
    .pipe(concat('main.js'))
    .pipe($.babel())
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'))
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
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(rename({suffix: '.min'}))
  .pipe(prefix('last 2 versions'))
  .pipe(gulp.dest('dist/css'))
})

gulp.task('watch', () => {
    gulp.watch('app/*.html', ['html', reload])
    gulp.watch('app/css/**/*.scss', ['styles', reload])
    gulp.watch('app/js/*.js', ['scripts', reload])
})
