const { src, dest, series } = require('gulp');
const del = require("del");
const replace = require('gulp-replace');
const { readFileSync } = require('fs');
const htmlbeautify = require('gulp-html-beautify');

const BOOTSTRAP = 'bootstrap-v43';

function clean() {
    return del(['dist/*']);
}

function build() {
    return src('src/index.xhtml')
        .pipe(replace('__b.skin.xhtml__', readFileSync(`src/b.skin.xhtml`, 'utf8')))
        .pipe(replace('__import.css.html__', readFileSync(`src/${BOOTSTRAP}/import.css.html`, 'utf8')))
        .pipe(replace('__container.html__', readFileSync(`src/${BOOTSTRAP}/container.html`, 'utf8')))
        .pipe(replace('__import.js.html__', readFileSync(`src/${BOOTSTRAP}/import.js.html`, 'utf8')))
        .pipe(dest('dist'));
}

function beautify() {
    var options = {
        "indent_size": 4,
        "indent_with_tabs": false,
        "max_preserve_newlines": 1,
        "end_with_newline": true
    };
    return src('dist/*')
        .pipe(htmlbeautify(options))
        .pipe(dest('dist'));
}

// Export tasks
exports.default = series(clean, build, beautify);
