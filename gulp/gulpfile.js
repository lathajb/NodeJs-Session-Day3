var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('default',function(){
     return gulp.src('source/**')
                .pipe(minify())
                .pipe(gulp.dest('./Dest'));
})


gulp.task('minifyjs',function(){
     return gulp.src('source/**')
                .pipe(minify())
                .pipe(gulp.dest('./Dest'));
})