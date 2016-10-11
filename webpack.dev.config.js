const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './client'
  ],

  devtool: 'source-map',

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']},
      {test: /\.scss$/, loaders: ['style', 'css', 'sass']}
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
