var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    favicons = require('gulp-favicons'),
    gutil = require('gulp-util'),
    changed = require('gulp-changed'),
    runSequence = require('run-sequence');
    rename = require('gulp-rename'),
    config = require('../config').img;

gulp.task('imagemin', function() {
	return gulp.src(config.src + '/imagemin-src/*.{jpg,gif,png}')
		.pipe(changed('./images'))
		.pipe(imagemin())
		.pipe(gulp.dest('./images'))
});


/*----------  Favicon  ----------*/
gulp.task('build-favicon', function () {
    return gulp.src(config.src +  '/favicon/favicon.png').pipe(favicons({
        icons: {
            android: false, // Create Android homescreen icon. `boolean`
            appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset: offsetInPercentage }`
            appleStartup: false, // Create Apple startup images. `boolean`
            coast: {
                offset: 25
            }, // Create Opera Coast icon with offset 25%. `boolean` or `{ offset: offsetInPercentage }`
            favicons: true, // Create regular favicons. `boolean`
            firefox: false, // Create Firefox OS icons. `boolean` or `{ offset: offsetInPercentage }`
            windows: false, // Create Windows 8 tile icons. `boolean`
            yandex: false // Create Yandex browser icon. `boolean`
        }
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest(config.dest + '/favicon'));
});