const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './client',

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel'
      },
      {
        test: /\.scss$/, loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: ['css', 'sass']
        })
      }
    ]
  },

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new ExtractTextPlugin('./sheets/bundle.css'),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, 'images'),
      to: path.join(__dirname, 'public', 'images')
    }])
  ]
};
