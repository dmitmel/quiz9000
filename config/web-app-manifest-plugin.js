module.exports = class WebAppManifestPlugin {
  constructor(publicUrl) {
    const config = {
      short_name: 'Quiz9000',
      name: 'Quiz9000',
      icons: [
        {
          src: `${publicUrl}/android-chrome-192x192.png`,
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: `${publicUrl}/android-chrome-512x512.png`,
          sizes: '512x512',
          type: 'image/png'
        }
      ],
      start_url: `${publicUrl}/`,
      display: 'standalone',
      theme_color: '#3f51b5',
      background_color: '#3f51b5'
    };

    this.json = JSON.stringify(config, null, 2);
  }

  apply(compiler) {
    compiler.plugin('compilation', compilation => {
      compilation.assets['manifest.json'] = {
        source: () => this.json,
        size: () => this.json.length
      };
    });
  }
};
