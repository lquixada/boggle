const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const isProd = () => process.env.NODE_ENV === 'production';
const hash = (type = '') => (isProd() ? `.[${type}hash]` : '');

module.exports = {
  entry: {
    app: isProd()
      ? ['./src/client']
      : ['webpack-hot-middleware/client', './src/client'],
    vendor: [
      'es6-promise',
      'history',
      'immutable',
      'lodash',
      'prop-types',
      'react',
      'react-dom',
      'react-github-fork-ribbon',
      'react-redux',
      'react-router-config',
      'react-router-redux',
      'redux',
      'redux-raven-middleware'
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
      },
      {test: /\.scss$/, use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})}
    ]
  },

  output: {
    path: path.join(__dirname, 'web', 'assets'),
    publicPath: '/',
    filename: `scripts/app${hash()}.js`
  },

  plugins: [
    isProd()
      ? new CleanWebpackPlugin(['./web/assets/scripts', './web/assets/sheets'], {
        // Without `root` CleanWebpackPlugin won't point to our
        // project and will fail to work.
        root: process.cwd()
      })
      : new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: `scripts/vendor${hash()}.js`,
      minChunks: Infinity
    }),
    new ExtractTextPlugin({
      disable: !isProd(),
      filename: `sheets/bundle${hash('content')}.css`,
      allChunks: true
    }),
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.join(__dirname, 'web', 'assets'),
      prettyPrint: true,
      update: true
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'boggle',
      filename: 'service-worker.js',
      staticFileGlobs: [
        './web/assets/images/**/*.{png,jpg,gif}',
        './web/assets/scripts/**/*.js',
        './web/assets/sheets/**/*.css'
      ],
      stripPrefix: './web/assets/'
    })
  ],

  stats: {
    children: !isProd()
  }
};
