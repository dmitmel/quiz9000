const ExtractTextPlugin = require('extract-text-webpack-plugin');
const flexBugsFixes = require('postcss-flexbugs-fixes');
const autoprefixer = require('autoprefixer');
const env = require('../env');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          // `style` loader turns CSS into JS modules that inject <style> tags. In
          // development `style` loader enables hot editing of CSS
          fallback: require.resolve('style-loader'),
          use: [
            {
              // `css` loader resolves paths in CSS and adds assets as
              // dependencies
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: true,
                minimize: env.type === 'production',
                sourceMap: true
              }
            },
            {
              // `postcss` loader applies autoprefixer to CSS
              loader: require.resolve('postcss-loader'),
              options: {
                // `ident` is necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                ident: 'postcss',
                sourceMap: true,
                plugins: [
                  flexBugsFixes,
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9' // React doesn't support IE8
                    ],
                    flexbox: 'no-2009'
                  })
                ]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      disable: env.type === 'development'
    })
  ]
};
