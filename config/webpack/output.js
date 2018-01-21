const webpack = require('webpack');
const paths = require('../paths');
const WebAppManifestPlugin = require('./WebAppManifestPlugin');

module.exports = {
  output: {
    // these paths aren't real files, instead they're virtual files served by
    // the WebpackDevServer in the development
    filename: 'static/js/[name].bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    // this is where the app is served from (`/` in the development)
    publicPath: paths.ensureSlash(paths.servedPath, true)
  },
  plugins: [
    // adds module names to factory functions so they appear in the browser's
    // profiler
    new webpack.NamedModulesPlugin(),
    // generates manifest.json and browserconfig.xml
    new WebAppManifestPlugin()
  ],
  // turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed
  performance: {
    hints: false
  }
};
