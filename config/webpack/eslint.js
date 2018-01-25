const eslintFormatter = require('react-dev-utils/eslintFormatter');
const paths = require('../paths');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: paths.appSrc,
        // it's important to do this before Babel processes the JS
        enforce: 'pre',
        loader: require.resolve('eslint-loader'),
        options: {
          formatter: eslintFormatter
        }
      }
    ]
  }
};
