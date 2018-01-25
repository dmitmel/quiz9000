module.exports = {
  module: {
    rules: [
      {
        test: /\.(bmp|gif|jpe?g|png)$/,
        // `url` loader works like `file` loader except that it embeds small
        // assets as data URLs to avoid requests
        loader: require.resolve('url-loader'),
        options: {
          // limit for asset size in bytes
          limit: 8192, // 8 KiB
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  }
};
