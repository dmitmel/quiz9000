// Jest transformer for stylesheets
// http://facebook.github.io/jest/docs/en/webpack.html#handling-static-assets

module.exports = {
  process() {
    return 'module.exports = {};';
  },
  getCacheKey() {
    // the output is always the same
    return 'cssTransform';
  },
};
