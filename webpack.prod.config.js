module.exports = {
  entry: [
    './index.js'
  ],
  devtool: 'eval',
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] },
      { test: /\.less$/, loader: 'style!css!less' }
    ]
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  }
};
