const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

/*gulp.task('css', function(){
	gulp.src('./css/main.css')
		.pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false }))
		.pipe(gulp.dest('./css/style.css'))	
		.pipe(browerSync.reload({
			stream: true
		}));
});*/

gulp.task('browerSync', function(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('start', ['browerSync'], function(){
	gulp.watch('./css/*.css', browerSync.reload);
	gulp.watch('index.html', browserSync.reload);
	gulp.watch('./scripts/*.js', browserSync.reload);
});