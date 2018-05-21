var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var browserSync = require('browser-sync').create();

gulp.task('hello', function () {
	console.log('Hello Milan');
});

gulp.task('watch', ['browserSync', 'sass'], function () {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('sass', function () {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass()) // Converts Sass to CSS with gulp-sass
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('useref', function () {   
	return gulp.src('dist/*.html')
		.pipe(useref())
		.pipe(gulp.dest('dist'))
});

gulp.task('useref', function(){
  return gulp.src('dist/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});

gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: 'dist'
		},
	})
})