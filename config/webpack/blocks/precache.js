const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const paths = require('../../paths');

module.exports = {
  plugins: [
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
  ]
};
