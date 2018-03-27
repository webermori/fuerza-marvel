var gulp = require('gulp'),
	sass = require('gulp-sass'),
	nodeBourbon = require('node-bourbon').includePaths,
	nodeNeat = require('node-neat').includePaths,
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	rename = require('gulp-rename'),
	livereload = require('gulp-livereload'),
	runSequence = require('run-sequence'),
	config = require('../config').sass,
	sassLint = require('gulp-sass-lint');


//Compila o SASS
gulp.task('sass', function() {
	return gulp.src(config.src + '/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: nodeBourbon.concat(nodeNeat)
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 5 versions'],
			cascade: false
		}))
		.pipe(rename(config.outputName))
		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest(config.dest))
		.pipe(livereload());
});

gulp.task('sass-lint', function() {
	return gulp.src(config.src + '/**/*.s+(a|c)ss')
		.pipe(sassLint({
			rules: {
				'indentation': 0,
				'quotes': 0,
				'placeholder-in-extend': 0,
				'class-name-format': 0,
				'final-newline': 0,
				'no-transition-all': 0,
				'hex-notation': 0,
				'no-trailing-whitespace': 0,
				'nesting-depth': 0,
				'empty-line-between-blocks': 0,
				'property-sort-order': 0,
				'mixins-before-declarations': 0,
				'no-css-comments': 0,
				'no-important': 0,
				'space-before-bang': 0,
				'no-ids': 1,
				'no-color-keywords': 0,
				'no-color-literals': 0,
				'single-line-per-selector': 0,
				'clean-import-paths': 0,
				'no-mergeable-selectors': 0 // Severity 1 (warning) 
			},
			files: {
				ignore: [
				'**/lib/**/*.scss', 
				'**/_fontello.scss',
				'**/_mixins.scss',
				'**/dist/_sprite.scss'
				]
			}
		}))
		.pipe(sassLint.format())
		.pipe(sassLint.failOnError())
});