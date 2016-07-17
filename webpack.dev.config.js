var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './client'
  ],

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
    ]
  },

  output: {
    path: path.join(__dirname, 'public', 'scripts'),
    publicPath: '/public/scripts/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
