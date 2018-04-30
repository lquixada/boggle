const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const isProd = () => process.env.NODE_ENV === 'production';
const hash = (type = '') => (isProd() ? `.[${type}hash]` : '');

module.exports = {
  mode: isProd()? 'production' : 'development',

  entry: {
    app: isProd()
      ? ['./src/client']
      : ['webpack-hot-middleware/client', './src/client'],
    vendor: [
      'es6-promise',
      'history',
      'immutable',
      'lodash/groupBy',
      'lodash/invokeMap',
      'lodash/toArray',
      'lodash/sample',
      'prop-types',
      'react',
      'react-dom',
      'react-github-fork-ribbon',
      'react-redux',
      'react-router-config',
      'react-router-redux',
      'redux',
      'redux-raven-middleware',
      'styled-components'
    ]
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
    path: path.join(__dirname, 'web', 'public'),
    publicPath: '/',
    filename: `scripts/[name]${hash('chunk')}.js`
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
      ? new CleanWebpackPlugin(['./web/public/scripts', './web/public/sheets'], {
        // Without `root` CleanWebpackPlugin won't point to our
        // project and will fail to work.
        root: process.cwd()
      })
      : new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'src/public/images',
        to: 'images'
      },
      {
        from: 'src/public/styles',
        to: 'styles'
      }
    ]),
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.join(__dirname, 'web', 'public'),
      prettyPrint: true,
      update: true
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'boggle',
      filename: 'service-worker.js',
      staticFileGlobs: [
        './web/public/images/**/*.{png,jpg,gif}',
        './web/public/scripts/**/*.js',
        './web/public/styles/**/*.css'
      ],
      stripPrefix: './web/public/',
      logger() {}
    })
  ],

  stats: {
    children: !isProd()
  }
};
