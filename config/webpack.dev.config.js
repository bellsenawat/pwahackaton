var webpack = require('webpack');
var path    = require('path');
var config  = require('../webpack.config');

config.output = {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, '..', 'src')
};

config.devServer = {
  port: 8080,
  hot: true,
  stats: { colors: true },
  inline: true,
  historyApiFallback: true
};

config.plugins = config.plugins.concat([

  // Adds webpack HMR support. It act's like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inline assets without page reloading.
  new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;
