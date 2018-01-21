const eslint = require('./eslint');
const images = require('./images');
const babel = require('./babel');
const css = require('./css');
const staticFiles = require('./static-files');

module.exports = {
  module: {
    rules: [eslint, images, babel, css, staticFiles]
  }
};
