// Variables
var prod = { outputStyle: 'compressed'};
var dev = { outputStyle: 'expanded'};

// Requires
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var rename = require('gulp-rename');

// Task Default gulp
gulp.task('default', ['sass', 'dev', 'watch'] );

// Task para o Sass em ambiente de produção
gulp.task('sass', function(){
	return gulp.src('./sass/**/*.sass')
			.pipe(sass(prod))
			.on('error', sass.logError)
			// .pipe(rename('index.min.css'))
			.pipe(gulp.dest('./css/min/'))
});

// Task para o Sass em ambiente de desenvolvimento
gulp.task('dev', function(){
	return gulp.src('./sass/**/*.sass')
			.pipe(sass(dev))
			.on('error', sass.logError)
			.pipe(gulp.dest('./css'))
});

// Task para o Watch
gulp.task('watch', function(){
	gulp.watch('./sass/**/*.sass', ['sass', 'dev'])
});