const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './client'
  ],

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.json$/, loader: 'json'}
    ]
  },

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'scripts/bundle.js',
    chunkFilename: 'scripts/[id].[name].js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.join(__dirname, 'public'),
      prettyPrint: true
    })
  ]
};
