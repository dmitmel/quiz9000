module.exports = {
  exclude: /\.(jsx?|json|css|html)$/,
  // When you `import` a static asset, `file` loader returns asset's
  // public URL. This loader will catch all modules that fall through
  // the other loaders
  loader: require.resolve('file-loader'),
  options: {
    name: 'static/media/[name].[hash:8].[ext]'
  }
};
