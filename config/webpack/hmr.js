const webpack = require('webpack');

// this config is focused on the developer experience and fast rebuilds
module.exports = {
  entry: {
    app: [require.resolve('react-dev-utils/webpackHotDevClient')]
  },
  plugins: [
    // emits hot updates for CSS
    new webpack.HotModuleReplacementPlugin()
  ]
};
