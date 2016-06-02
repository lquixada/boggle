module.exports = {
  entry: './components',
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.less$/, loader: 'style!css!less' }
    ]
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  }
};
