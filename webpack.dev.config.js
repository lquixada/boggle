const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: ['webpack-hot-middleware/client', './client/index'],
    serviceWorker: ['./client/service-worker']
  },

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.json$/, loader: 'json'}
    ]
  },

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'scripts/[name].js',
    chunkFilename: 'scripts/[id].[name].js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new AssetsPlugin({prettyPrint: true})
  ]
};
