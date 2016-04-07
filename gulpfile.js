var path = 'C:/tfs/WebSprint/Trunk/Lon/CSS/Furniture/WebsiteSpecific.css';
var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: 'C:/tfs/WebSprint/Trunk/',
    livereload: true
  });
});
 
gulp.task('html', function () {
    console.log('reloading?');
  gulp.src(path)
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch([path], ['html']);
});
 
gulp.task('default', ['connect', 'watch']);