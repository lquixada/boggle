const path = require('path')
const { entries } = require('serverless-webpack').lib

module.exports = {
  entry: entries,

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
          options: {
            presets: [
              ['@babel/env',
                {
                  targets: {
                    node: 'current'
                  }
                }]
            ]
          }
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
