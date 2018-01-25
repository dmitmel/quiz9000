const merge = require('webpack-merge');
const env = require('../env');

env.assertEnvType('production');

// this config is focused on the developer experience and fast rebuilds
module.exports = merge(
  require('./resolve'),
  require('./eslint'),
  require('./babel'),
  require('./css'),
  require('./images'),
  require('./static-files'),
  require('./polyfills'),
  require('./app'),
  require('./vendor'),
  require('./uglify'),
  require('./html'),
  require('./output'),
  require('./source-maps'),
  require('./precache')
);
