module.exports = {
  entry: {
    button: './app/button/view.spec.jsx',
    empty: './app/empty.spec.jsx'
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
    path: './.specs',
    filename: '[name].spec.js'
  },
  externals: {
    'enzyme': 'enzyme',
    'sinon': 'sinon'
  }
};
