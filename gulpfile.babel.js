import gulp from 'gulp';
import bsloader from 'browser-sync';

const browserSync = bsloader.create();

// Simple watch task to check for changes in HTML and CSS
gulp.task('serve', () => {
    browserSync.init({
	server: './',
	open: true
    });

    gulp.watch('./index.html').on('change', browserSync.reload);
    gulp.watch('./assets/css/*.css', ['css']);
});

// Inject CSS to browser task
gulp.task('css', () => {
    return gulp.src('./assets/css/*.css')
	.pipe(browserSync.stream());
});

// Default Task
gulp.task('default', ['serve']);
