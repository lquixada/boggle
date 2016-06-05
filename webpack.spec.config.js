module.exports = {
  entry: {
    button: './tests/button.spec.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        loader: 'null-loader'
      }
    ]
  },
  output: {
    libraryTarget: 'umd',
    path: './.tmp',
    filename: '[name].spec.js'
  },
  externals: {
    'enzyme': 'enzyme',
    'sinon': 'sinon'
  }
};
