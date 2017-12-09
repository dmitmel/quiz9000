const ICON_SIZES = [192, 512];

function generateManifest(env) {
  return JSON.stringify({
    short_name: env.REACT_APP_NAME,
    name: env.REACT_APP_NAME,
    icons: ICON_SIZES.map(size => ({
      src: `${env.PUBLIC_URL}/android-chrome-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: 'image/png'
    })),
    start_url: `${env.PUBLIC_URL}/`,
    display: 'standalone',
    theme_color: env.REACT_APP_THEME_COLOR,
    background_color: env.REACT_APP_THEME_COLOR
  });
}

function generateBrowserConfig(env) {
  // prettier-ignore
  return (
    '<?xml version="1.0" encoding="utf-8"?>' +
    '<browserconfig>' +
      '<msapplication>' +
        '<tile>' +
          '<square150x150logo src="/mstile-150x150.png"/>' +
          `<TileColor>${env.REACT_APP_THEME_COLOR}</TileColor>` +
        '</tile>' +
      '</msapplication>' +
    '</browserconfig>'
  );
}

module.exports = class WebAppManifestPlugin {
  constructor(env) {
    this.manifest = generateManifest(env);
    this.browserConfig = generateBrowserConfig(env);
  }

  apply(compiler) {
    compiler.plugin('compilation', compilation => {
      function addFile(name, data) {
        compilation.assets[name] = {
          source: () => data,
          size: () => data.length
        };
      }

      addFile('manifest.json', this.manifest);
      addFile('browserconfig.xml', this.browserConfig);
    });
  }
};
