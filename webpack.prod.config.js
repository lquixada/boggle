const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/client'],
    vendor: [
      'es6-promise',
      'history',
      'immutable',
      'lodash',
      'prop-types',
      'react',
      'react-dom',
      'react-github-fork-ribbon',
      'react-redux',
      'react-router-config',
      'react-router-redux',
      'redux',
      'redux-raven-middleware'
    ]
  },

  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
      {test: /\.scss$/, use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})}
    ]
  },

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'scripts/app.[hash].js',
    chunkFilename: 'scripts/[id].[name].[chunkhash].js'
  },

  plugins: [
    new CleanWebpackPlugin(['./public/scripts', './public/sheets'], {
      // Without `root` CleanWebpackPlugin won't point to our
      // project and will fail to work.
      root: process.cwd()
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'scripts/vendor.[hash].js',
      minChunks: Infinity
    }),
    new ExtractTextPlugin('sheets/bundle.[contenthash].css'),
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.join(__dirname, 'public'),
      prettyPrint: true
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'boggle',
      filename: 'service-worker.js',
      staticFileGlobs: [
        './public/images/**/*.{png,jpg,gif}',
        './public/scripts/**/*.js',
        './public/sheets/**/*.css'
      ],
      stripPrefix: './public/'
    })
  ],

  stats: {
    children: false
  }
};
