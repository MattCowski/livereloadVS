

var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

gulp.task('stuff', function() {
  console.log('reloading');
  livereload({port: 35729});
});

gulp.task('watch', function() {
  livereload.listen(35729);
  gulp.watch('C:/tfs/WebSprint/Trunk/Lon/**/**/*.css', ['stuff']);
});

gulp.task('default', ['watch']);