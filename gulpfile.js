const gulp = require('gulp');

const paths = {
//    scripts: ['src/public/js/*.js'],
    config:'config/**/*'//config folder
};

const dest = {
//    scripts: 'app/public/js',
    config:'app/config'
}
// Not all tasks need to use streams 
// A gulpfile is just another node program and you can use any package available on npm 
gulp.task('clean', function () {
    // You can use multiple globbing patterns as you would with `gulp.src` 
    return del(['app/public']);
});
gulp.task('clean-scripts', function () {
    return del([dest.scripts]);
});

//copy config folder from root to /app
gulp.task('copy-config', () => {
    return gulp.src(paths.config)
      .pipe(gulp.dest(dest.config));
  });

// Rerun the task when a file changes 
gulp.task('watch', function () {
    gulp.watch(paths.config, ['copy-config']);
    

});

// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['watch','copy-config']);