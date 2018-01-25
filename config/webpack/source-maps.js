const path = require('path');
const env = require('../env');

// source maps are resource heavy and can cause out of memory issue for large
// source files
const shouldUseSourceMap = process.env.GENERATE_SOURCE_MAP !== 'false';

module.exports = {
  devtool:
    shouldUseSourceMap &&
    `${env.type === 'development' ? 'cheap-module-' : ''}source-map`,
  output: {
    // format paths in source maps as URLs on Windows
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  }
};
