const env = require('./env');
const { servedPath } = require('./paths');

// generate manifest.json
const manifestJson = JSON.stringify({
  short_name: env.REACT_APP_NAME,
  name: env.REACT_APP_NAME,
  icons: [192, 512].map(size => ({
    src: `${servedPath}/android-chrome-${size}x${size}.png`,
    sizes: `${size}x${size}`,
    type: 'image/png'
  })),
  start_url: `${servedPath}/`,
  display: 'standalone',
  theme_color: env.REACT_APP_THEME_COLOR,
  background_color: env.REACT_APP_THEME_COLOR
});

// generate browserconfig.xml
const browserConfigXml =
  // prettier-ignore
  '<?xml version="1.0" encoding="utf-8"?>' +
  '<browserconfig>' +
    '<msapplication>' +
      '<tile>' +
        `<square150x150logo src="${servedPath}/mstile-150x150.png"/>` +
        `<TileColor>${env.REACT_APP_THEME_COLOR}</TileColor>` +
      '</tile>' +
    '</msapplication>' +
  '</browserconfig>';

module.exports = class WebAppManifestPlugin {
  // eslint-disable-next-line class-methods-use-this
  apply(compiler) {
    compiler.plugin('compilation', compilation => {
      function addFile(name, data) {
        compilation.assets[name] = {
          source: () => data,
          size: () => data.length
        };
      }

      addFile('manifest.json', manifestJson);
      addFile('browserconfig.xml', browserConfigXml);
    });
  }
};
