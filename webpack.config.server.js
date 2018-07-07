const path = require('path')
const slsw = require('serverless-webpack')

const babelOptions = {
  presets: [
    ['@babel/env',
      {
        targets: {
          node: 'current'
        }
      }]
  ]
}

module.exports = {
  entry: slsw.lib.entries,

  target: 'node',

  mode: 'production',

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
        use: {
          loader: 'babel-loader',
          options: babelOptions
        }
      }
    ]
  },

  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  }
}
