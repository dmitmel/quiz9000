const flexBugsFixes = require('postcss-flexbugs-fixes');
const autoprefixer = require('autoprefixer');

module.exports = {
  test: /\.css$/,
  use: [
    // `style` loader turns CSS into JS modules that inject <style>
    // tags. In development `style` loader enables hot editing of CSS
    require.resolve('style-loader'),
    {
      // `css` loader resolves paths in CSS and adds assets as
      // dependencies
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: true,
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
};
