var gulp        = require("gulp"),
    sass        = require("gulp-sass"),
    concat      = require("gulp-concat"),
    watch       = require("gulp-watch"),
    plumber     = require("gulp-plumber"),
    minify_css  = require("gulp-minify-css"),
    uglify      = require("gulp-uglify"),
    sourcemaps  = require("gulp-sourcemaps"),
    notify      = require("gulp-notify"),
    prefix      = require("gulp-autoprefixer"),
    imagemin    = require("gulp-imagemin"),
    pngquant    = require("imagemin-pngquant");

// --------------------------------------------------------------------

var dest_js  = "dist/js";
var dest_css = "dist/css";
var dest_img = "dist/img";

var src_sass = "src/sass/**/*.scss";
var src_js   = "src/js/**/*.js";
var src_img   = "src/img/*";

// --------------------------------------------------------------------

var onError = function(err) {
    console.log(err);
    this.emit('end');
};

// SASS to CSS
gulp.task('sass', function() {

    return gulp.src(src_sass)
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest(dest_css))
        .pipe(minify_css())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest_css));
        // .pipe(notify({message: 'Hello world we are done'}));
});

// --------------------------------------------------------------------

// Compile JS

gulp.task('js', function() {

    return gulp.src(src_js)
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest_js));

});

// --------------------------------------------------------------------

// Images

gulp.task('img', function() {

    return gulp.src(src_img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(dest_img));

});

// --------------------------------------------------------------------

// Watch

gulp.task('watch', function() {
    gulp.watch(src_js, ['js']);
    gulp.watch(src_sass, ['sass']);
    gulp.watch(src_img, ['img']);
});


// --------------------------------------------------------------------

// Default

gulp.task('default', ['watch', 'sass', 'js', 'img']);

