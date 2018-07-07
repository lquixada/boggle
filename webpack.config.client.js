const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const webPath = path.join(__dirname, 'web', 'public')

module.exports = (env) => ({
  mode: env.prod ? 'production' : 'development',

  entry: {
    app: env.prod ? ['./src/client'] : ['webpack-hot-middleware/client', './src/client']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/env', {
                targets: {
                  browsers: ['last 2 versions', 'not ie > 0']
                },
                modules: false
              }]
            ],
            plugins: env.prod ? [] : ['react-hot-loader/babel']
          }
        }
      }
    ]
  },

  output: {
    path: webPath,
    publicPath: env.prod ? 'https://static.lquixada.com/boggle/' : '/assets/',
    filename: env.prod ? 'scripts/[name].[chunkhash:6].js' : 'scripts/[name].js'
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
    env.prod
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
})
