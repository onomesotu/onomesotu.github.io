const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function(){
	return gulp.src('./css/main.css')
		.pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false }))
		.pipe(gulp.dest('./css'))	
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('start', ['browserSync', 'css'], function(){
	gulp.watch('./css/*.css', ['css']);
	gulp.watch('index.html', browserSync.reload);
	gulp.watch('./scripts/*.js', browserSync.reload);
});