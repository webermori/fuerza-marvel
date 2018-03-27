var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	copy = require('gulp-contrib-copy'),
	uglify = require('gulp-uglify'),
	runSequence = require('run-sequence'),
	config = require('../config').js;

//Verificação de erros no JS
gulp.task('lint', function() {
	return gulp.src(config.src + '**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('jsmin', function() {
	gulp.src(config.src  + '/*.js')
		.pipe(uglify())
		.pipe(gulp.dest(config.dest));
});

//Vendor generate
gulp.task('build-js-vendor', function() {
	return gulp.src([
		'./node_modules/npm-modernizr/modernizr.js'
	])
	.pipe(uglify())
	.pipe(gulp.dest(config.dest + '/vendor'));
});