var gulp = require("gulp");
var postcss = require("gulp-postcss");

var autoprefixer = require("autoprefixer");
var cssnext = require("cssnext");
var precss = require("precss")


var color_rgba_fallback = require('postcss-color-rgba-fallback');
var opacity = require('postcss-opacity');
var pseudoelements = require('postcss-pseudoelements');
var vmin = require('postcss-vmin');
var pixrem = require('pixrem');
var will_change = require('postcss-will-change');


var atImport = require("postcss-import");
var mqpacker = require("css-mqpacker");
var cssnano = require("cssnano");

var crip = require("postcss-crip");

var alias = require("postcss-alias");

var font_magician = require("postcss-font-magician");
gulp.task("css", function () {
    var processors = [
        will_change,
        autoprefixer({ browsers: "last 3 versions" }),
        cssnext,
        precss,
        color_rgba_fallback,
        opacity,
        pseudoelements,
        vmin,
        pixrem,
        // compress and optimize
        atImport,
        mqpacker,
        crip,
        alias,
        font_magician
        // 注释掉cssnano，方便看效果
        // cssnano
    ];
    return gulp.src("./src/*.css")
        .pipe(postcss(processors))
        .pipe(gulp.dest("./dist"))
})