const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const platform = process.env.PLATFORM || 'web';
const outputPath = path.join(__dirname, platform, 'public');
const isProd = () => process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd()? 'production' : 'development',

  entry: {
    app: isProd()
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
    path: outputPath,
    publicPath: '/',
    filename: `scripts/[name]${isProd() ? '.[chunkhash]' : ''}.js`
  },

  performance: {
    maxEntrypointSize: 450000,
    maxAssetSize: 450000
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
    isProd()
      ? new CleanWebpackPlugin(path.join(outputPath, 'scripts'))
      : new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      'src/public/images',
      'src/public/styles'
    ]),
    new AssetsPlugin({
      filename: 'assets.json',
      path: outputPath,
      prettyPrint: true,
      update: true
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'boggle',
      filename: 'service-worker.js',
      staticFileGlobs: [
        `${outputPath}/images/**/*.{png,jpg,gif}`,
        `${outputPath}/scripts/**/*.js`,
        `${outputPath}/styles/**/*.css`
      ],
      stripPrefix: outputPath,
      logger() {}
    })
  ],

  stats: {
    modules: false,
  }
};
