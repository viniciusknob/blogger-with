const { src, dest, series } = require('gulp');
const { fs } = require('fs');

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask
