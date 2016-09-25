const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


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
    new CleanWebpackPlugin(['./public/scripts', './public/sheets'], {
      // Without `root` CleanWebpackPlugin won't point to our
      // project and will fail to work.
      root: process.cwd()
    }),
    new ExtractTextPlugin('./sheets/bundle.[contenthash].css'),
    new AssetsPlugin({update: true, prettyPrint: true})
  ]
};
