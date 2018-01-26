const webpack = require('webpack');
const paths = require('../../paths');
const env = require('../../env');
const WebAppManifestPlugin = require('../WebAppManifestPlugin');

module.exports = {
  bail: env.type === 'production',
  output: {
    path: env.type === 'production' ? paths.appBuild : undefined,
    // these paths aren't real files, instead they're virtual files served by
    // the WebpackDevServer in the development
    filename: `static/js/[name].${
      env.type === 'development' ? 'bundle' : '[chunkhash:8]'
    }.js`,
    chunkFilename: `static/js/[name].${
      env.type === 'development' ? 'chunk' : '[chunkhash:8].chunk'
    }.js`,
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
