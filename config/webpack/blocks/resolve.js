const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const paths = require('../../paths');
const env = require('../../env');

module.exports = {
  output: {
    // add /* filename */ comments to require()s in the generated output
    pathinfo: env.type === 'development'
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
  plugins: [
    // watcher doesn't work well if you mistype casing in a path so this plugin
    // prints an error when you attempt to do this.
    // See https://github.com/facebookincubator/create-react-app/issues/240
    new CaseSensitivePathsPlugin()
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
