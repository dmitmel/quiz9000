const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const env = require('./env');
const paths = require('./paths');
const WebAppManifestPlugin = require('./WebAppManifestPlugin');

const { resolve } = require;

// this config is focused on the developer experience and fast rebuilds
module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    // The `app` bundle contains **app** code
    app: [
      './polyfills',
      'react-dev-utils/webpackHotDevClient',
      'react-hot-loader/patch'
    ]
      .map(resolve)
      .concat([
        // the app code is included last so it won't crash the WebpackDebServer
        // client if there is an error during the initialization
        paths.appIndexJs
      ]),
    // The `vendor` bundle contains **libraries**. Their code is excluded from
    // the `app` bundle into a separate one for improving caching in the
    // browser because they don't change so often
    vendor: [
      'firebase',
      'object-assign',
      'prop-types',
      'promise/lib/rejection-tracking',
      'promise/lib/es6-extensions',
      'react',
      'react-dom',
      'react-error-overlay',
      'react-redux',
      'redux',
      'redux-thunk',
      'whatwg-fetch'
    ].map(resolve)
  },
  output: {
    // add /* filename */ comments to require()s in the generated output
    pathinfo: true,
    // these paths aren't real files, instead they're virtual files served by
    // the WebpackDevServer in the development
    filename: 'static/js/[name].bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    // this is where the app is served from (`/` in the development)
    publicPath: paths.servedPath,
    // format paths in source maps as URLs on Windows
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  },
  resolve: {
    modules: ['node_modules', paths.appNodeModules],
    extensions: [
      '.js',
      '.json',
      // include JSX as a common component filename extension
      '.jsx'
    ],
    plugins: [
      // prevents from importing files outside of `src/` or `node_modules/`
      new ModuleScopePlugin(paths.appSrc, [
        // exceptions:
        paths.appPackageJson
      ])
    ]
  },
  module: {
    // report missing exports as errors instead of warnings
    strictExportPresence: true,
    rules: [
      // run the linter
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        // it's important to do this before Babel processes the JS
        enforce: 'pre',
        loader: resolve('eslint-loader'),
        options: {
          formatter: eslintFormatter,
          configFile: '.eslintrc.yml',
          eslintPath: resolve('eslint')
        }
      },
      {
        // `oneOf` will traverse all following loaders until one will
        // match the requirements. When no loader matches it will fall
        // back to the `file` loader at the end of the loader list
        oneOf: [
          // `url` loader works like `file` loader except that it embeds small
          // assets as data URLs to avoid requests
          {
            test: /\.(bmp|gif|jpe?g|png)$/,
            loader: resolve('url-loader'),
            options: {
              // limit for asset size in bytes
              limit: 8192, // 8 KiB
              name: 'static/media/[name].[hash:8].[ext]'
            }
          },
          // process JS with Babel
          {
            test: /\.(js|jsx)$/,
            include: paths.appSrc,
            loader: resolve('babel-loader'),
            options: {
              // feature of `babel-loader` (not Babel itself): enable results
              // caching in `./node_modules/.cache/babel-loader/` for faster
              // rebuilds
              cacheDirectory: true
            }
          },
          {
            test: /\.css$/,
            use: [
              // `style` loader turns CSS into JS modules that inject <style>
              // tags. In development `style` loader enables hot editing of CSS
              resolve('style-loader'),
              {
                // `css` loader resolves paths in CSS and adds assets as
                // dependencies
                loader: resolve('css-loader'),
                options: {
                  importLoaders: true,
                  sourceMap: true
                }
              },
              {
                // `postcss` loader applies autoprefixer to CSS
                loader: resolve('postcss-loader'),
                options: {
                  // `ident` is necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  sourceMap: true,
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
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
          },
          // When you `import` a static asset, `file` loader returns asset's
          // public URL. This loader will catch all modules that fall through
          // the other loaders
          {
            // Exclude JS files to keep `css` loader working because it injects
            // it's runtime that would otherwise processed by the `file` loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpack's internal loaders
            exclude: /\.(js|html|json)$/,
            loader: resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // Makes some environment variables available in index.html.
    // The served path is available as %PUBLIC_URL% in index.html, e.g.:
    // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    new InterpolateHtmlPlugin(env.raw),
    // injects <script> tags into `index.html`
    new HtmlWebpackPlugin({
      inject: 'body',
      template: paths.appHtml
    }),
    // adds module names to factory functions so they appear in the browser's
    // profiler
    new webpack.NamedModulesPlugin(),
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'development') { ... }
    new webpack.DefinePlugin({ 'process.env': env.stringified }),
    // replaces app renderer in the development
    new webpack.NormalModuleReplacementPlugin(
      {
        test: file => {
          const fileExt = path.extname(file);
          const fileWithoutExt = path.basename(file, fileExt);
          return path.extname(fileWithoutExt) === '.prod';
        }
      },
      resource => {
        const file = resource.resource;
        const fileDir = path.dirname(file);
        const fileExt = path.extname(file);
        let fileWithoutExt = path.basename(file, fileExt);
        // slice `.prod` extension
        fileWithoutExt = path.basename(fileWithoutExt, '.prod');
        resource.resource = path.join(
          fileDir,
          `${fileWithoutExt}.dev${fileExt}`
        );
      }
    ),
    // emits hot updates for CSS
    new webpack.HotModuleReplacementPlugin(),
    // watcher doesn't work well if you mistype casing in a path so this plugin
    // prints an error when you attempt to do this.
    // See https://github.com/facebookincubator/create-react-app/issues/240
    new CaseSensitivePathsPlugin(),
    // makes the discovery of installed node_modules automatic
    // See https://github.com/facebookincubator/create-react-app/issues/186
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    // moves libraries to the `vendor` bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    // generates manifest.json and browserconfig.xml
    new WebAppManifestPlugin()
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  // turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed
  performance: {
    hints: false
  }
};
