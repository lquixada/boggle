const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  entry: {
    app: ['webpack-hot-middleware/client', './src/client'],
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

  devtool: 'source-map',

  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: ['react-hot-loader', 'babel-loader']},
      {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  },

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'scripts/app.js',
    chunkFilename: 'scripts/[id].[name].js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'scripts/vendor.js',
      minChunks: Infinity
    }),
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.join(__dirname, 'public'),
      prettyPrint: true,
      update: true
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
  ]
};
