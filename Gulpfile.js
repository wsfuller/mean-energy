var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var cssnano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');

var onError = function (err) {
  console.log('\x07');
  console.log(err);
  this.emit('end');
  console.log('echo -e "\a"');
};

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('clean', function(){
  return gulp.src('dist')
      .pipe(clean());
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('fonts', function(){
  return gulp.src(['app/assets/fonts/**/*{.eot,.svg,.ttf,.woff,.woff2}'])
  .pipe(gulp.dest('dist/assets/fonts'))
  .pipe(livereload());
});

gulp.task('html', function() {
  return gulp.src(['app/**/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(livereload());
});

gulp.task('images', function(){
  return gulp.src(['app/assets/images/**/*', '!app/assets/images/**/original/*'])
    .pipe(gulp.dest('dist/assets/images'))
    .pipe(livereload());
});

gulp.task('scripts', function(){
  return gulp.src(['app/assets/javascripts/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('scripts.min.js'))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('dist/assets/javascripts/'))
    .pipe(livereload());
});

gulp.task('styles', function(){
  return gulp.src('app/assets/stylesheets/**/*.scss')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass({style: 'expanded'}))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('dist/assets/stylesheets/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/assets/stylesheets/'))
    .pipe(livereload());
});

gulp.task('vendor-fonts', function(){
  return gulp.src([
    'node_modules/material-design-iconic-font/dist/fonts/*'
  ])
    .pipe(gulp.dest('dist/assets/fonts/'));
});

gulp.task('vendor-scripts', function(){
    return gulp.src([
    'node_modules/angular/angular.min.js',
    'node_modules/angular-animate/angular-animate.min.js',
    'node_modules/angular-aria/angular-aria.min.js',
    'node_modules/angular-messages/angular-messages.min.js',
    'node_modules/angular-material/angular-material.min.js',
    'node_modules/angular-ui-router/release/angular-ui-router.min.js',
    'node_modules/angular-retina/build/angular-retina.min.js',
    'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js'
  ])
    .pipe(concat('vendor-scripts.min.js'))
    .pipe(gulp.dest('dist/assets/javascripts/'));
});

gulp.task('watch',function(){
  livereload.listen();
  gulp.watch('app/**/*.html', ['html']);
  gulp.watch('app/assets/stylesheets/**/*.scss', ['styles']);
  gulp.watch('app/assets/javascripts/**/*.js', ['scripts']);
  gulp.watch('app/assets/images/**/*', ['images']);
});

gulp.task('default', function(){
  gulp.start(
    'vendor-fonts',
    'vendor-scripts',
    'scripts',
    'html',
    'styles',
    'images',
    'fonts',
    'connect',
    'watch'
  );
});

gulp.task('build', function(){
  gulp.start(
    'vendor-scripts',
    'scripts'
  );
});
