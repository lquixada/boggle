module.exports = {
  mode: 'production',

  target: 'node',

  externals: [
    'webpack',
    'webpack-dev-middleware',
    'webpack-hot-middleware'
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
