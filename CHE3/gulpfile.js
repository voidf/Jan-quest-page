const gulp = require('gulp'),
    bs = require('browser-sync'),
    reload = bs.reload;

gulp.task('default', () => {
    bs.init({
        server: {
             baseDir: "./",
             directory: true
        }
    });
    gulp.watch("css\\*.css").on('change', reload);
    gulp.watch("js\\*.js").on('change', reload);
    gulp.watch("*.htm").on('change', reload);
});