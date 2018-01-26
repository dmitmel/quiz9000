const webpack = require('webpack');

module.exports = {
  entry: {
    app: [require.resolve('react-dev-utils/webpackHotDevClient')]
  },
  plugins: [
    // emits hot updates for CSS
    new webpack.HotModuleReplacementPlugin()
  ]
};
