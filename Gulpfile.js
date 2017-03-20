var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('clean', function(){
  return gulp.src()
      .pipe(clean());
});

gulp.task('vendor-scripts', function(){
    return gulp.src([
    'bower_components/angular/angular.min.js',
    'bower_components/angular-animate/angular-animate.min.js',
    'bower_components/angular-aria/angular-aria.min.js',
    'bower_components/angular-messages/angular-messages.min.js',
    'bower_components/angular-material/angular-material.min.js',
    'bower_components/angular-ui-router/release/angular-ui-router.min.js',
    'bower_components/angular-retina/build/angular-retina.min.js',
  ])
    .pipe(concat('vendor-scripts.min.js'))
    .pipe(gulp.dest('dist/javascripts/build/'));
});

gulp.task('scripts', function(){
  return gulp.src(['dist/javascripts/development/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('scripts.min.js'))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('dist/javascripts/build/'))
    .pipe(livereload());
});

gulp.task('styles', function(){
  return gulp.src('dist/stylesheets/**/*.scss')
    .pipe(sass({style: 'expanded'}))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('dist/stylesheets/build/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/stylesheets/build/'))
    .pipe(livereload());
});

gulp.task('views', function(){
  return gulp.src('views/**.*{.pug,.jade}')
      .pipe(livereload());
});


gulp.task('default',function(){
  livereload.listen();
  gulp.watch('views/**/*{.pug, .jade}', ['views']);
  gulp.watch('dist/stylesheets/**/*.scss', ['styles']);
  gulp.watch('dist/javascripts/development/**/*.js', ['scripts']);
  //gulp.watch('src/assets/javascripts/**/*.json', ['json']);
  //gulp.watch('src/assets/images/**/*', ['images']);
});

gulp.task('build', function(){
  gulp.start(
    'vendor-scripts',
    'scripts'
  );
});
