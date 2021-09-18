const gulp = require("gulp");
const postcss = require("gulp-postcss");
const less = require("gulp-less");

const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const buildLess = (folder) => {
  const processors = [autoprefixer, cssnano];
  return gulp
    .src(`./src/${folder}/*.less`)
    .pipe(less())
    .pipe(postcss(processors))
    .pipe(gulp.dest(`./dist/${folder}`));
};

gulp.task("beta", function () {
  return buildLess("beta");
});

gulp.task("main", function () {
  return buildLess("main");
});

gulp.task("all", async function () {
  return gulp.parallel([() => buildLess("beta"), () => buildLess("main")])();
});

gulp.task("beta:watch", function () {
  gulp.watch("./src/beta/*.less", () => buildLess("beta"));
});

gulp.task("main:watch", function () {
  gulp.watch("./src/main/*.less", () => buildLess("main"));
});
