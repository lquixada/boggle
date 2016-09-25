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
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
    ]
  },

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: './scripts/bundle.js',
    chunkFilename: './scripts/[name].js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new AssetsPlugin({update: true, prettyPrint: true})
  ]
};
