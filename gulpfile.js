const gulp = require('gulp');
const uglifycss = require('gulp-uglifycss');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

gulp.task('image', function(){
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'));
});

gulp.task('css', function () {
  gulp.src('./css/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('html', () => {
    return gulp.src('./*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('build'));
  });

gulp.task("build", gulp.parallel("image", "css", "html"))
