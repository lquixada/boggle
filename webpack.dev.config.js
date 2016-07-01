var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './client.js'
  ],

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
      { test: /\.less$/, loaders: ['style', 'css', 'less'] }
    ]
  },

  output: {
    path: path.join(__dirname, 'assets', 'scripts'),
    publicPath: '/assets/scripts/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
