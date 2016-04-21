module.exports = {
  entry: './app/index.jsx',
  devtool: 'source-map',
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
        loader: 'style!css!less'
      }
    ]
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
