const merge = require('webpack-merge');

// this config is focused on the developer experience and fast rebuilds
module.exports = merge(
  require('./resolve'),
  require('./loaders'),
  require('./polyfills'),
  require('./hmr'),
  require('./app'),
  require('./vendor'),
  require('./html'),
  require('./output'),
  require('./source-maps')
);
