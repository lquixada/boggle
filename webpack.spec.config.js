module.exports = {
  entry: './app/button/view.spec.jsx',
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
    filename: 'bundle.spec.js'
  },
  externals: {
    "enzyme": "enzyme",
    "sinon": "sinon"
  }
};
