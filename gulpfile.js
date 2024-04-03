
// USE NPX GULP WATCH, INSTEAD OF NPM GULP WATCH
import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass( dartSass );
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import purgecss from 'gulp-purgecss';


// ASSETS folders variables
const cssAssetsDest = 'assets/scss/';
const jsAssetsDest = 'assets/js/';

// SRC folders variables
const cssSrcDest = 'src/css/';
const jsSrcDest = 'src/js/';

//SRC Filenames
const cssFilename = 'style.min.css';
const jsFilename = 'script.min.js';

gulp.task('sass', function () {
    return gulp.src(cssAssetsDest + '**/*.scss')
        .pipe(sass())
        .pipe(concat(cssFilename))
        .pipe(gulp.dest(cssSrcDest));
});

gulp.task('prefix', () =>
    gulp.src(cssSrcDest + cssFilename)
        .pipe(autoprefixer({
            overrideBrowserslist: [
                'last 2 versions',
                '> 1%',
                'ie >= 11',
                'Firefox >= 60',
                'iOS >= 10',
                'Android >= 5'
              ],
            cascade: false
        }))
        .pipe(gulp.dest(cssSrcDest))
);

gulp.task('minify-css', () => {
    return gulp.src(cssSrcDest + cssFilename)
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest(cssSrcDest));
});

gulp.task('minify-js', () => {
    return gulp.src(jsAssetsDest + '**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat(jsFilename))
        .pipe(gulp.dest(jsSrcDest));
});

// FOR PRODUCTION
gulp.task('purgeCSS', function () {
    return gulp.src(cssAssetsDest + '**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(concat(cssFilename))
        .pipe(gulp.dest(cssSrcDest));
});

gulp.task('watch', function () {
    gulp.watch(cssAssetsDest + '**/*.scss', gulp.series('sass', 'prefix', 'minify-css'));
    gulp.watch(jsAssetsDest + '**/*.js', gulp.series('minify-js'));
});