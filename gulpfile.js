var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    ignore = require('gulp-ignore'),
    prefix = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    haml = require('gulp-ruby-haml'),
    concat = require('gulp-concat')

gulp.task('process-scss', function(){
  return gulp.src('./dev/stylesheets/taiga.scss')
    .pipe(sass())
    .on('error', swallowError)
    .pipe(prefix())
    .pipe(gulp.dest('./taiga/'))
});

function swallowError(error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('process-haml', function(){
  return gulp.src('./dev/taiga.haml')
    .pipe(haml())
    .pipe(gulp.dest('./taiga/'))
});

gulp.task('process-js', function(){
  return gulp.src([
    './dev/bower_components/codemirror/lib/codemirror.js',
    './dev/bower_components/codemirror/keymap/vim.js',
    './dev/js/taiga.js'
  ])
  .pipe(concat('taiga-all.js'))
  .pipe(gulp.dest('./taiga/'))
});

gulp.task('default', ['process-scss', 'process-haml', 'process-js'], function(){
  gulp.start('process-scss');
  gulp.start('process-haml');
  gulp.watch('./dev/stylesheets/taiga.scss', ['process-scss']);
  gulp.watch('./dev/taiga.haml', ['process-haml']);
});
