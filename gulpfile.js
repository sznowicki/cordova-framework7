(function() {
	'use strict';
	var gulp = require('gulp'),
		argv= require('yargs').argv,
		_ = require('lodash'),
		jshint = require('gulp-jshint'),
		cordova = require("cordova-lib").cordova,
		open = require('gulp-open'),
		less = require('gulp-less'),
		jade = require('gulp-jade'),
		rename = require('gulp-rename'),
		path = require('path'),
		uglify = require('gulp-uglify'),
		sourcemaps = require('gulp-sourcemaps'),
		minifyCSS = require('gulp-minify-css'),
		stylish = require('jshint-stylish'),
		concat = require('gulp-concat'),
		fs = require('fs'),
		platform = _.get(argv, '.platform') ? argv.platform : 'ios',
		theme = _.get(argv, '.theme') ? argv.theme : 'ios',
		paths = {
			root: './',
			build: {
				js: 'www/js',
				css: 'www/css'
			}
		},
		appScripts = {
			filename: 'app.js',
			jsFiles: [
				'app/Framework7/dist/js/framework7.js',
				'app/js/app.js'
			],
			lessFiles: [
				'app/less/' + theme + 'main.less'
			]
		};

	gulp.task('scripts', function (cb) {
		gulp.src(appScripts.jsFiles)
			.pipe(sourcemaps.init())
			.pipe(concat(appScripts.filename))
			.pipe(uglify())
			.pipe(jshint())
			.pipe(jshint.reporter(stylish))
			.pipe(sourcemaps.write('./'))

			.pipe(gulp.dest(paths.build.js))
			.on('end', function () {
				cb();
			});
	});
	console.log(platform);
	gulp.task('styles', function (cb) {
			gulp.src(appScripts.lessFiles)
				.pipe(
					less({
					paths: [ path.join(__dirname, 'less', 'includes') ]
					})
				)
				.pipe(gulp.dest(paths.build.css))
				.on('end', function () {
					cb();
				});
	});

	gulp.task('run', ['default'], function(cb) {
		cordova.run({
			platforms: [platform]
		})
	});

	gulp.task('serve', ['default'], function(cb){
		cordova.run({
			platforms: [platform]
		});
	});

	gulp.task('default', [ 'scripts' , 'styles' ]);
})();