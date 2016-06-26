var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client.js',

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
};
