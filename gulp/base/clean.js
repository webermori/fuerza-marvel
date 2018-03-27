var gulp = require('gulp'),
    clean = require('gulp-clean'),
    pathCss = require('../config').sass,
    pathJs = require('../config').js;
    pathImg = require('../config').img;

/*----------  Styles  ----------*/

gulp.task('clean-css', function() {
	return gulp.src(pathCss.dest + '/*.css')
		.pipe(clean());
});


/*----------  Scripts  ----------*/

gulp.task('clean-js-app', function() {
	return gulp.src(pathJs.dest + '/app')
		.pipe(clean());
});

gulp.task('clean-js-vendor', function() {
	return gulp.src(pathJs.dest + '/vendor')
		.pipe(clean());
});

gulp.task('clean-js-lib', function() {
	return gulp.src(pathJs.dest + '/lib', {
			read: false
		})
		.pipe(clean());
});

gulp.task('clean-js', function() {
	gulp.start('clean-js-app', 'clean-js-lib');
});


/*----------  Images  ----------*/

gulp.task('clean-img', function() {
	return gulp.src(pathImg.dest + '/*.*')
		.pipe(clean());
});

gulp.task('clean-favicon', function() {
	return gulp.src(pathImg.dest + '/favicon')
		.pipe(clean());
});
