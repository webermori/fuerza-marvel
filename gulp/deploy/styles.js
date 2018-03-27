var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	cleanCSS = require('gulp-clean-css'),
	stripCssComments = require('gulp-strip-css-comments'),
	config = require('../config').sass,
	header = require('gulp-header'),
	pkg = require('../../package.json'),
	banner = ['/************************************************************',
		' * <%= pkg.name %> - <%= pkg.author %>',
		' * <%= new Date() %>',
		' ************************************************************/',
		''
	].join('\n');

gulp.task('css-prod', function() {
  return gulp.src(config.dest + '/*.css')
    .pipe(cleanCSS())
    .pipe(stripCssComments({preserve: false}))
    .pipe(header(banner, {
		pkg: pkg
	}))
    .pipe(gulp.dest(config.dest));
});