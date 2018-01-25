const paths = require('../paths');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        options: {
          // feature of `babel-loader` (not Babel itself): enable results
          // caching in `./node_modules/.cache/babel-loader/` for faster
          // rebuilds
          cacheDirectory: true
        }
      }
    ]
  }
};
