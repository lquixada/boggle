const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './client'
  ],

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']
      },
      {
        test: /\.scss$/, loaders: ['style', 'css', 'sass']
      }
    ]
  },

  output: {
    path: path.join(__dirname, 'public'),
    // Hot reload needs this path in order to work
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
