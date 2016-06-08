var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.less$/, loaders: ['style', 'css', 'less'] }
    ]
  },

  output: {
    path: path.join(__dirname, '..'),
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    })
  ]
};
