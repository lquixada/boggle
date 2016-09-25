const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    bundle: ['./client/index'],
    serviceWorker: ['./client/service-worker']
  },

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract({fallbackLoader: 'style', loader: ['css', 'sass']}) },
      { test: /\.json$/, loader: 'json'}
    ]
  },

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: './scripts/[name].[hash].js',
    chunkFilename: './scripts/[id].[chunkhash].[name].js'
  },

  plugins: [
    new ExtractTextPlugin('./sheets/bundle.[contenthash].css'),
    new AssetsPlugin({update: true, prettyPrint: true})
  ]
};
