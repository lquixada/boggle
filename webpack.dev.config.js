var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client.js',

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
      { test: /\.less$/, loaders: ['style', 'css', 'less'] }
    ]
  },

  output: {
    path: path.join(__dirname, 'assets', 'scripts'),
    publicPath: '/assets/scripts/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    // Enable special support for Hot Module Replacement
    // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
    // Use "webpack/hot/dev-server" as additional module in your entry point
    // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.
    hot: true,

    // Set this as true if you want to access dev server from arbitrary url.
    // This is handy if you are using a html5 router.
    historyApiFallback: false,

    // Set this if you want to enable gzip compression for assets
    // compress: true,

    // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
    // Use "*" to proxy all paths to the specified server.
    // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
    // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
    // proxy: {
    //   "*": "http://localhost:9090"
    // },

    // pass [static options](http://expressjs.com/en/4x/api.html#express.static) to inner express server
    // staticOptions: {
    // },

    // webpack-dev-middleware options
    inline: true,
    // quiet: false,
    // noInfo: false,
    // lazy: true,
    // filename: "bundle.js",
    // watchOptions: {
    //   aggregateTimeout: 300,
    //   poll: 1000
    // },
    publicPath: '/assets/scripts/'
    // headers: { "X-Custom-Header": "yes" },
    // stats: { colors: true }
  }
};
