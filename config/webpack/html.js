const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const env = require('../env');
const paths = require('../paths');

module.exports = {
  plugins: [
    // makes some environment variables available in index.html
    new InterpolateHtmlPlugin(env.raw),
    // injects <script> tags into `index.html`
    new HtmlWebpackPlugin({
      inject: 'body',
      template: paths.appHtml
    })
  ]
};
