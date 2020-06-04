"use strict"
var gulp = require("gulp");
var sourcemap = require("gulp-sourcemaps");
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var svgstore = require("gulp-svgstore");
var imagemin = require("gulp-imagemin");
var server = require("browser-sync").create();
var uglify = require('gulp-uglify');
var del = require("del");


gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("html", function () {
    return gulp.src("source/index.html")
      .pipe(gulp.dest("build"))
});

gulp.task("js", function () {
  return gulp.src("source/js/*.js")
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest("build/js/"));
});


gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("sprite", function () {
  return gulp.src("source/img/icon-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"))
});

gulp.task("server", function () {
    server.init({
      server: "build/",
      notify: false,
      open: true,
      cors: true,
      ui: false
  });
  gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/sass/**/*.scss", gulp.series("css"));

  gulp.watch("source/*.html").on("change", gulp.series("html", "refresh"));
});

gulp.task("refresh", function (done) {
    server.reload();
    done();
});

gulp.task("copy", function () {
    return gulp.src([
      "source/fonts/**/*.{woff,woff2}",
      "source/css/**",
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("build", gulp.series("clean", "copy", "css", "images", "js", "sprite", "html"))
gulp.task("start", gulp.series("build", "server"));