var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	runSequence = require('run-sequence'),
	config = require('../config').sass,
	header = require('gulp-header'),
	pkg = require('../../package.json'),
	banner = ['/************************************************************',
		' * <%= pkg.name %> - <%= pkg.author %>',
		' * <%= new Date() %>',
		' ************************************************************/',
		''
	].join('\n'),
	config = require('../config').js;

//Minifica JS
gulp.task('js-uglify', function() {
	return gulp.src(['./js/nva-applications.js'])
		.pipe(uglify())
		.pipe(banner(comment, {
			pkg: pkg
		}))
		.pipe(gulp.dest('./js/'));
});

gulp.task('js-deploy', function(callback) {
	runSequence(['scripts'], ['js-uglify'], callback);
});
