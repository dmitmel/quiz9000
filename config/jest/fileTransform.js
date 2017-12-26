// Jest transformer for static files
// http://facebook.github.io/jest/docs/en/webpack.html#handling-static-assets

const path = require('path');

module.exports = {
  process(src, filename) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  }
};
