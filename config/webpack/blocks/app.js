const webpack = require('webpack');
const env = require('../../env');
const paths = require('../../paths');

// this config is focused on the developer experience and fast rebuilds
module.exports = {
  entry: {
    app: [
      // the app code must be included last so it won't crash the
      // WebpackDevServer client if there is an error during the initialization
      paths.appIndexJs
    ]
  },
  module: {
    // report missing exports as errors instead of warnings
    strictExportPresence: true
  },
  plugins: [
    // makes some environment variables available to the JS code
    new webpack.DefinePlugin({ 'process.env': env.stringified })
  ]
};