var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

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
    path: path.join(__dirname, 'public'),
    // Hot reload needs this path in order to work
    publicPath: '/',
    filename: './scripts/bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, 'images'),
      to: './images'
    }])
  ]
};
