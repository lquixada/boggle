const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const webPath = path.join(__dirname, 'web', 'public')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProd ? 'production' : 'development',

  entry: {
    app: isProd
      ? ['./src/client']
      : ['webpack-hot-middleware/client', './src/client']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['react', ['es2015', {modules: false}]],
            plugins: ['react-hot-loader/babel']
          }
        }
      }
    ]
  },

  output: {
    path: webPath,
    publicPath: isProd ? 'https://static.lquixada.com/boggle/' : '/assets/',
    filename: `scripts/[name]${isProd ? '.[chunkhash:6]' : ''}.js`
  },

  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 400000
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },

  plugins: [
    isProd
      ? new CleanWebpackPlugin(path.join(webPath, 'scripts'))
      : new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'src/public/images',
        to: path.join(webPath, 'images')
      }
    ]),
    new AssetsPlugin({
      filename: 'assets.json',
      path: webPath,
      fullPath: false,
      prettyPrint: true,
      update: true
    })
  ],

  stats: {
    modules: false
  }
}
