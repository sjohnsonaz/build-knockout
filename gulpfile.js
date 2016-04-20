var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('js:build', function () {
    return gulp.src('src/js/main.js')
        .pipe(webpack(require('./webpack.config.js')))
        .on('error', function (error) {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('dist/js'));
});

gulp.task("js:build-watch", ["js:build"], function () {
    gulp.watch(["src/js/**/*"], ["js:build"]);
});

gulp.task('default', ['js:build']);

gulp.task('dev', ['js:build-watch']);
