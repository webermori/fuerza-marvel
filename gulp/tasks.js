var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function(callback) {
	runSequence(['lint'], ['sass', 'build-scripts'], 'watch', callback);
});

gulp.task('default', function() {
    gulp.start('build');
});

/*----------  CSS  ----------*/

gulp.task('css', function(callback) {
	//runSequence('sass-lint', ['sass'], 'watch', callback);
	runSequence('clean-css', ['sass'], 'watch', callback);
});


/*----------  JS  ----------*/

gulp.task('js', function(callback) {
	runSequence('lint', 'build-scripts', 'watch', callback);
});

gulp.task('js-lib', function(callback) {
	runSequence('clean-js-lib', 'clone-js-lib', 'build-scripts', callback);
});

gulp.task('js-vendor', function(callback) {
	runSequence('clean-js-vendor', 'build-js-vendor', callback);
});


/*----------  IMAGES  ----------*/

gulp.task('img', function(callback) {
    runSequence('imagemin', callback);
});

gulp.task('favicon', function(callback) {
	runSequence('clean-favicon', 'build-favicon', callback);
});


/*----------  DEPLOY  ----------*/

gulp.task('css-deploy', function() {
    gulp.start('css-prod');
});