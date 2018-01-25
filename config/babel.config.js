const env = require('./env');

const envType = process.env.BABEL_ENV || env.type;

module.exports = (api, options) => ({
  presets: getPresets(options),
  plugins: getPlugins(options)
});

function addTo(list, path, opts) {
  path = require.resolve(path);
  list.push(opts ? [path, opts] : path);
}

function getPresets({ react }) {
  const presets = [];

  addTo(presets, '@babel/preset-env', {
    targets:
      envType === 'test'
        ? {
            // enable ECMAScript features necessary for user's Node version
            node: 'current'
          }
        : {
            // React parses on IE 9
            ie: 9,
            // transform everything in production because UglifyJS doesn't
            // support ES6 and later
            forceAllTransforms: envType === 'production'
          },
    modules: envType === 'test' && 'commonjs'
  });

  if (react) {
    addTo(presets, '@babel/preset-react', {
      // use `Object.assign` directly instead of Babel's `extends` helper
      useBuiltIns: true,
      // the `development` option adds two things:
      // 1. component stack to warning messages
      // 2. `__self` attribute to JSX which React uses for some warnings
      development: envType === 'development' || envType === 'test'
    });
  }

  return presets;
}

function getPlugins({ react }) {
  const plugins = [];

  addTo(plugins, '@babel/plugin-transform-runtime', {
    helpers: true,
    polyfill: false,
    // use polyfills needed for `async`/`await` and generators
    regenerator: true
  });

  addTo(plugins, '@babel/plugin-proposal-class-properties');
  addTo(plugins, '@babel/plugin-proposal-object-rest-spread', {
    // use Object.assign directly instead of Babel's `extends` helper
    useBuiltIns: true
  });

  // add syntax support for `import()`
  addTo(plugins, '@babel/plugin-syntax-dynamic-import');
  if (envType === 'test') addTo(plugins, 'babel-plugin-dynamic-import-node');

  if (react && envType === 'development')
    addTo(plugins, 'react-hot-loader/babel');

  return plugins;
}
