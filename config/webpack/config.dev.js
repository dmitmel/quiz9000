const merge = require('webpack-merge');
const env = require('../env');

env.assertEnvType('development');

// this config is focused on the developer experience and fast rebuilds
module.exports = merge(
  require('./resolve'),
  require('./eslint'),
  require('./babel'),
  require('./css'),
  require('./images'),
  require('./static-files'),
  require('./polyfills'),
  require('./hmr'),
  require('./app'),
  require('./vendor'),
  require('./html'),
  require('./output'),
  require('./source-maps')
);
