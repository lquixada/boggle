var path = require('path');

module.exports = {
  entry: [
    './index.js'
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] },
      { test: /\.less$/, loaders: ['style', 'css', 'less'] }
    ]
  },
  output: {
    path: path.join(__dirname, '..'),
    filename: 'bundle.js'
  }
};
