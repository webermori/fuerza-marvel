var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	livereload = require('gulp-livereload'),
	pathCss = require('../config').sass,
	pathJs = require('../config').js;
	pathImg = require('../config').img;

//Watch
gulp.task('watch', function() {
	livereload.listen();
	//browserSync.reload();

	//Gulpfile
	gulp.watch(['./gulpfile.js'], ['default']);

	//CSS
	gulp.watch([pathCss.src + '/**/*.scss'], ['sass']);

	//Js
	gulp.watch(['./assets/js/app/**/*.js'], ['lint', 'build-scripts']);

	gulp.runSequence

});


