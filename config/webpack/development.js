const merge = require('webpack-merge');
const env = require('../env');
const blocks = require('./blocks');

env.assertEnvType('development');

// this config is focused on the developer experience and fast rebuilds
module.exports = merge(
  blocks.resolve,
  blocks.eslint,
  blocks.babel,
  blocks.css,
  blocks.images,
  blocks.staticFiles,
  blocks.polyfills,
  blocks.hmr,
  blocks.app,
  blocks.vendor,
  blocks.html,
  blocks.output,
  blocks.sourceMaps
);
