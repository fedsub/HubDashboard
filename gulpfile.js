const gulp = require('gulp');
sass = require('gulp-sass');
uglify = require('gulp-uglify-es').default;
concat = require('gulp-concat');
gutil = require('gulp-util');
browserSync = require('browser-sync').create();

gulp.task('watch', ['browserSync', 'copyHtml', 'sass', 'scripts'], function () {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/*.js', ['scripts']);
});

gulp.task('copyHtml', function() {
	gulp.src('app/*.html')
	.pipe(gulp.dest('dist'))
})

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
		.pipe(browserSync.reload({
			stream: true
		}))
		.pipe(gulp.dest('dist/js'))
});


gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: 'dist'
		},
	})
})