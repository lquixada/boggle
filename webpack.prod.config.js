var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './client',

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') }
    ]
  },

  output: {
    path: path.join(__dirname, 'assets', 'scripts'),
    publicPath: '/assets/scripts/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('../sheets/bundle.css')
  ]
};
