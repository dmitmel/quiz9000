const webpack = require('webpack');
const wbCore = require('@webpack-blocks/webpack');
const wbBabel = require('@webpack-blocks/babel');
const wbExtractText = require('@webpack-blocks/extract-text');
const wbAssets = require('@webpack-blocks/assets');
const wbUglify = require('@webpack-blocks/uglify');
const wbPostCSS = require('@webpack-blocks/postcss');
const wbESLint = require('@webpack-blocks/eslint');

const eslintFormatter = require('react-dev-utils/eslintFormatter');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const postcssFlexBugsFixes = require('postcss-flexbugs-fixes');
const autoprefixer = require('autoprefixer');
const WebAppManifestPlugin = require('./WebAppManifestPlugin');
const paths = require('./paths');
const env = require('./env');

const commonsChunk = (options = {}) =>
  wbCore.addPlugins([new webpack.optimize.CommonsChunkPlugin(options)]);

const splitVendor = (name = 'vendor') =>
  commonsChunk({
    name,
    minChunks: ({ resource }) => resource && /node_modules/.test(resource)
  });

module.exports = wbCore.createConfig([
  // entry
  wbCore.entryPoint([require.resolve('./polyfills')]),
  wbCore.env('development', [
    wbCore.entryPoint([require.resolve('react-dev-utils/webpackHotDevClient')])
  ]),
  wbCore.entryPoint([paths.appIndexJs]),

  // resolver options
  wbCore.resolve({ extensions: ['.jsx'] }),

  // loaders
  wbCore.match(/\.jsx?/, { include: paths.appSrc }, [
    wbESLint({ formatter: eslintFormatter }),
    wbBabel()
  ]),
  wbCore.match(/\.css/, [
    wbAssets.css({
      importLoaders: 1,
      minimize: env.type === 'production',
      sourceMap: true
    }),
    wbPostCSS({
      sourceMap: true,
      plugins: [
        postcssFlexBugsFixes,
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
    }),
    wbCore.env('production', [
      wbExtractText('static/css/[name].[contenthash:8].css')
    ])
  ]),
  wbCore.match(/\.(bmp|gif|jpe?g|png)$/, [
    wbAssets.url({
      limit: 8 * 1024, // 8 KiB
      name: 'static/media/[name].[hash:8].[ext]'
    })
  ]),
  wbCore.match(
    undefined,
    { exclude: /\.(jsx?|json|bmp|gif|jpe?g|png|css|html)$/ },
    [wbAssets.file({ name: 'static/media/[name].[hash:8].[ext]' })]
  ),

  // env variables
  wbCore.addPlugins([
    new webpack.DefinePlugin({ 'process.env': env.stringified }),
    new InterpolateHtmlPlugin(env.raw)
  ]),

  // code splitting
  splitVendor(),
  // extracts webpack runtime into a different chunk
  commonsChunk({ name: 'manifest' }),
  // tells Webpack to use file paths as module IDs
  wbCore.addPlugins([new webpack.NamedModulesPlugin()]),

  // development tools
  wbCore.setDevTool(
    env.type === 'development' ? 'cheap-module-source-map' : 'source-map'
  ),
  wbCore.addPlugins([
    new SimpleProgressWebpackPlugin({
      format: process.stdout.isTTY ? 'minimal' : 'verbose'
    })
  ]),
  wbCore.env('development', [
    wbCore.addPlugins([new webpack.HotModuleReplacementPlugin()])
  ]),

  // output
  wbCore.addPlugins([
    // injects <script> tags into `index.html`
    new HtmlWebpackPlugin({
      inject: 'body',
      template: paths.appHtml,
      minify: env.type === 'production' && {
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
    // generates manifest.json and browserconfig.xml
    new WebAppManifestPlugin(),
    // generates a manifest file which contains a mapping of all asset
    // filenames to their corresponding output file
    new WebpackManifestPlugin({ fileName: 'asset-manifest.json' })
  ]),
  wbCore.setOutput({
    filename: `static/js/[name]${
      env.type === 'development' ? '' : '.[chunkhash:8]'
    }.js`,
    chunkFilename: `static/js/[name]${
      env.type === 'development' ? '' : '.[chunkhash:8]'
    }.chunk.js`,
    // add /* filename */ comments to require()s in the generated output in
    // development
    pathinfo: env.type === 'development',
    // this is where the app is served from (`/` in development)
    publicPath: paths.ensureSlash(paths.servedPath, true)
  }),
  wbCore.env('production', [
    wbCore.setOutput({ path: paths.appBuild }),
    wbCore.addPlugins([
      // generates a service worker script that will precache and keep up to date
      // the HTML and assets
      new SWPrecacheWebpackPlugin({
        filename: 'service-worker.js',
        minify: true,
        // for unknown URLs, fallback to the index page
        navigateFallback: `${paths.servedPath}/index.html`,
        // ignore URLs starting from /__ (useful for Firebase)
        // https://github.com/facebookincubator/create-react-app/issues/2237#issuecomment-302693219
        navigateFallbackWhitelist: [/^(?!\/__).*/],
        // By default, a cache-busting query parameter is appended to requests
        // used to populate the caches, to ensure the responses are fresh.
        // If a URL is already hashed by Webpack, then there is no concern
        // about it being stale, and the cache-busting can be skipped.
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        // don't precache sourcemaps (they're large) and build asset manifest
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
        logger(message) {
          if (message.indexOf('Total precache size is') === 0)
            // this message occurs for every build and is a bit too noisy
            return;
          if (message.indexOf('Skipping static resource') === 0)
            // this message obscures real errors so it's ignored
            // https://github.com/facebookincubator/create-react-app/issues/2612
            return;
          console.log(message);
        }
      })
    ]),
    wbUglify({
      uglifyOptions: {
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
        }
      },
      sourceMap: true
    }),
    // fail immediately on first error
    wbCore.customConfig({ bail: true })
  ])
]);
