const { servedPath } = require('./paths');
const { APP_TITLE, APP_THEME_COLOR } = require('./app.config');

// generate manifest.json
const manifestJson = JSON.stringify({
  short_name: APP_TITLE,
  name: APP_TITLE,
  icons: [192, 512].map(size => ({
    src: `${servedPath}/android-chrome-${size}x${size}.png`,
    sizes: `${size}x${size}`,
    type: 'image/png',
  })),
  start_url: `${servedPath}/`,
  display: 'standalone',
  theme_color: APP_THEME_COLOR,
  background_color: APP_THEME_COLOR,
});

// generate browserconfig.xml
const browserConfigXml =
  // prettier-ignore
  '<?xml version="1.0" encoding="utf-8"?>' +
  '<browserconfig>' +
    '<msapplication>' +
      '<tile>' +
        `<square150x150logo src="${servedPath}/mstile-150x150.png"/>` +
        `<TileColor>${APP_THEME_COLOR}</TileColor>` +
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
          size: () => data.length,
        };
      }

      addFile('manifest.json', manifestJson);
      addFile('browserconfig.xml', browserConfigXml);
    });
  }
};
