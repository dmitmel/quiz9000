const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const env = require('./env');
const paths = require('./paths');
const WebAppManifestPlugin = require('./WebAppManifestPlugin');

const { resolve } = require;

// source maps are resource heavy and can cause out of memory issue for large
// source files
const shouldUseSourceMap = process.env.GENERATE_SOURCE_MAP !== 'false';

// assert this because development builds of React are slow and aren't intended
// for production.
if (process.env.NODE_ENV !== 'production')
  throw new Error('Production builds must have NODE_ENV=production.');

// this config compiles slowly and is focused on producing a fast and minimal
// bundle.
module.exports = {
  // don't attempt to continue if there are any errors
  bail: true,
  // generate source maps only if necessary
  devtool: shouldUseSourceMap && 'source-map',
  entry: {
    // The `app` bundle contains **app** code
    app: [resolve('./polyfills'), paths.appIndexJs],
    // The `vendor` bundle contains **libraries**. Their code is excluded from
    // the `app` bundle into a separate one for improving caching in the
    // browser because they don't change so often
    vendor: [
      'connected-react-router',
      'firebase',
      'object-assign',
      'prop-types',
      'promise/lib/rejection-tracking',
      'promise/lib/es6-extensions',
      'react',
      'react-dom',
      'whatwg-fetch',
      'react-redux',
      'react-router',
      'redux',
      'redux-thunk'
    ].map(resolve)
  },
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
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
            loader: require.resolve('babel-loader'),
            options: {
              compact: true
            }
          },
          {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
              // `style` loader turns CSS from async bundles into JS modules
              // that inject <style> tags
              fallback: resolve('style-loader'),
              use: [
                {
                  // `css` loader resolves paths in CSS and adds assets as
                  // dependencies
                  loader: resolve('css-loader'),
                  options: {
                    importLoaders: true,
                    minimize: true,
                    sourceMap: shouldUseSourceMap
                  }
                },
                {
                  // `postcss` loader applies autoprefixer to CSS
                  loader: resolve('postcss-loader'),
                  options: {
                    // `ident` is necessary for external CSS imports to work
                    // https://github.com/facebookincubator/create-react-app/issues/2677
                    ident: 'postcss',
                    plugins: () => [
                      require('postcss-flexbugs-fixes'),
                      autoprefixer({
                        browsers: [
                          '>1%',
                          'last 4 versions',
                          'Firefox ESR',
                          'not ie < 9' // React doesn't support IE8 anyway
                        ],
                        flexbox: 'no-2009'
                      })
                    ],
                    sourceMap: shouldUseSourceMap
                  }
                }
              ]
            })
          },
          // When you `import` a static asset, `file` loader returns asset's
          // public URL. This loader will catch all modules that fall through
          // the other loaders
          {
            loader: resolve('file-loader'),
            // Exclude JS files to keep `css` loader working because it injects
            // it's runtime that would otherwise processed by the `file` loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpack's internal loaders
            exclude: /\.(js|html|json)$/,
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
      inject: true,
      template: paths.appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'development') { ... }
    new webpack.DefinePlugin({ 'process.env': env.stringified }),
    // moves libraries to the `vendor` bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    // minifies the code
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        // Disabled because of an issue with Uglify breaking seemingly valid code:
        // https://github.com/facebookincubator/create-react-app/issues/2376
        // Pending further investigation:
        // https://github.com/mishoo/UglifyJS2/issues/2011
        comparisons: false
      },
      output: {
        comments: false,
        // Turned on because emoji and regex is not minified properly using default
        // https://github.com/facebookincubator/create-react-app/issues/2488
        ascii_only: true
      },
      sourceMap: shouldUseSourceMap
    }),
    // extracts CSS into a separate file
    new ExtractTextPlugin({
      filename: 'static/css/[name].[contenthash:8].css'
    }),
    // generates manifest.json and browserconfig.xml
    new WebAppManifestPlugin(),
    // generates a manifest file which contains a mapping of all asset
    // filenames to their corresponding output file
    new ManifestPlugin({ fileName: 'asset-manifest.json' }),
    // generates a service worker script that will precache and keep up to date
    // the HTML and assets
    new SWPrecacheWebpackPlugin({
      // By default, a cache-busting query parameter is appended to requests
      // used to populate the caches, to ensure the responses are fresh.
      // If a URL is already hashed by Webpack, then there is no concern
      // about it being stale, and the cache-busting can be skipped.
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      logger(message) {
        if (message.indexOf('Total precache size is') === 0)
          // this message occurs for every build and is a bit too noisy
          return;
        if (message.indexOf('Skipping static resource') === 0)
          // this message obscures real errors so it's ignored
          // https://github.com/facebookincubator/create-react-app/issues/2612
          return;
        console.log(message);
      },
      minify: true,
      // for unknown URLs, fallback to the index page
      navigateFallback: `${paths.servedPath}/index.html`,
      // ignore URLs starting from /__ (useful for Firebase)
      // https://github.com/facebookincubator/create-react-app/issues/2237#issuecomment-302693219
      navigateFallbackWhitelist: [/^(?!\/__).*/],
      // don't precache sourcemaps (they're large) and build asset manifest
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
    })
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};
