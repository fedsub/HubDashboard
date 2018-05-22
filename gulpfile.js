const gulp = require('gulp');
sass = require('gulp-sass');
uglify = require('gulp-uglify');
concat = require('gulp-concat');
gutil = require('gulp-util');
browserSync = require('browser-sync').create();

gulp.task('watch', ['browserSync', 'sass', 'scripts'], function () {
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

gulp.task('scripts', function () {
	gulp.src('app/js/*.js')
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
		.pipe(gulp.dest('dist/js'))
});


gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: 'dist'
		},
	})
})