module.exports = function() {
  const env = process.env.BABEL_ENV || process.env.NODE_ENV;

  const plugins = [];
  function addPlugin(plugin, options) {
    plugin = require.resolve(plugin);
    plugins.push(options ? [plugin, options] : plugin);
  }

  addPlugin('@babel/plugin-transform-runtime', {
    helpers: false,
    polyfill: false,
    // use polyfills needed for `async`/`await` and generators
    regenerator: true
  });
  addPlugin('@babel/plugin-transform-regenerator', {
    // async functions are converted to generators by babel-preset-env
    async: false
  });
  addPlugin('babel-plugin-transform-decorators-legacy');
  addPlugin('@babel/plugin-proposal-class-properties');
  addPlugin('@babel/plugin-proposal-object-rest-spread', {
    // use Object.assign directly instead of Babel's `extends` helper
    useBuiltIns: true
  });
  // add syntax support for `import()`
  addPlugin('@babel/plugin-syntax-dynamic-import');

  let envPresetConfig = [];

  if (env === 'test') {
    // enable ES features necessary for user's Node version
    envPresetConfig = { targets: { node: 'current' } };

    // compile import() to a deferred require()
    addPlugin('babel-plugin-dynamic-import-node');
  } else {
    // enable latest stable ECMAScript features
    envPresetConfig = {
      targets: {
        // React parses on ie 9
        ie: 9,
        // TODO: remove after https://github.com/mishoo/UglifyJS2/issues/448
        forceAllTransforms: env === 'production'
      },
      // disable polyfill transforms
      useBuiltIns: false,
      // don't transform modules to CJS
      modules: false
    };
  }

  if (env === 'production') {
    // TODO: enable when the issue is resolved
    // https://github.com/facebookincubator/create-react-app/issues/553
    // addPlugin('@babel/plugin-transform-react-constant-elements');
  }

  if (env === 'development') addPlugin('react-hot-loader/babel');

  return {
    presets: [
      ['@babel/preset-env', envPresetConfig],
      [
        '@babel/preset-react',
        {
          // use Object.assign directly instead of Babel's `extends` helper
          useBuiltIns: true,
          // the `development` options adds two things:
          // 1. component stack to warning messages
          // 2. __self attribute to JSX which React uses for some warnings
          development: env === 'development' || env === 'test'
        }
      ]
    ],
    plugins
  };
};
