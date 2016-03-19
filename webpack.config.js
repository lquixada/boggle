module.exports = {
  entry: './app/init.jsx',
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
  }
};
