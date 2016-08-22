const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './client'
  ],

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract({fallbackLoader: 'style', loader: ['css', 'sass']}) }
    ]
  },

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: './scripts/bundle.js',
    chunkFilename: './scripts/[name].bundle.js'
  },

  plugins: [
    new ExtractTextPlugin('./sheets/bundle.css')
  ]
};
