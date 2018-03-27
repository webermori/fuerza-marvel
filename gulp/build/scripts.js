var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	copy = require('gulp-contrib-copy'),
	uglify = require('gulp-uglify'),
	runSequence = require('run-sequence'),
	config = require('../config').js;

//Verificação de erros no JS
gulp.task('lint', function() {
	//return gulp.src('./assets/js/app.js')
	return gulp.src(config.src + '**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('build-scripts', function() {
	gulp.src(config.src  + '/app/**/*.js')
		.pipe(gulp.dest(config.dest + '/app'));
});

gulp.task('jsmin', function() {
	gulp.src(config.src  + '/app/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest(config.dest + '/app'));
});


//Vendor generate
gulp.task('build-js-vendor', function() {
	return gulp.src([
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/npm-modernizr/modernizr.js'
	])
	.pipe(uglify())
	.pipe(gulp.dest(config.dest + '/vendor'));
});

gulp.task('clone-js-lib', function() {
	return gulp.src([
		'./node_modules/enquire.js/dist/enquire.min.js'
	])
	.pipe(gulp.dest(config.dest + '/lib/'));
});