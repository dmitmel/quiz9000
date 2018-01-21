const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  output: {
    // format paths in source maps as URLs on Windows
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  }
};
