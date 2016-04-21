module.exports = {
  entry: {
    button: './app/button/index.spec.jsx'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
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
