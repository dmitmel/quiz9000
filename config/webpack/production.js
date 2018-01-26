const merge = require('webpack-merge');
const env = require('../env');
const blocks = require('./blocks');

env.assertEnvType('production');

// this config is focused on the developer experience and fast rebuilds
module.exports = merge(
  blocks.resolve,
  blocks.eslint,
  blocks.babel,
  blocks.css,
  blocks.images,
  blocks.staticFiles,
  blocks.polyfills,
  blocks.app,
  blocks.vendor,
  blocks.uglify,
  blocks.html,
  blocks.output,
  blocks.sourceMaps,
  blocks.precache
);
