const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');

gulp.task('less', () => {
  return gulp.src('LESS/index.less')
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(gulp.dest('CSS'));
});
