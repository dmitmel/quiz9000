const webpack = require('webpack');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const paths = require('../../paths');

module.exports = {
  entry: {
    // The `vendor` bundle contains **libraries**. Their code is excluded from
    // the `app` bundle into a separate one for improving caching in the
    // browser because they don't change so often
    vendor: [
      'connected-react-router',
      'firebase',
      'object-assign',
      'prop-types',
      'promise/lib/rejection-tracking',
      'promise/lib/es6-extensions',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'recompose',
      'redux',
      'redux-thunk',
      'whatwg-fetch'
    ].map(require.resolve)
  },
  plugins: [
    // makes the discovery of installed `node_modules` automatic
    // see https://github.com/facebookincubator/create-react-app/issues/186
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    // moves libraries to the `vendor` bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    })
  ]
};
