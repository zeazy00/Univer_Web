/// <binding BeforeBuild='default' />
"use strict"

const { src, dest, series, parallel } = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass');


var paths = {
    webroot: "./wwwroot/"
};

function compileScss() {
    return src('./static/**/*.scss')
        .pipe(sass())
        .pipe(dest(paths.webroot));
}

function moveHtml() {
    return src('./static/**/*.html')
        .pipe(dest(paths.webroot));
}

function cleanFolder() {
    return src(paths.webroot, { read: false, allowEmpty: true })
        .pipe(clean())
}

exports.default = series(cleanFolder, parallel(compileScss, moveHtml));
exports.clean = cleanFolder;
