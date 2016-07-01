var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client.js',

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.less$/, loaders: ['style', 'css', 'less'] }
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
    })
  ]
};
