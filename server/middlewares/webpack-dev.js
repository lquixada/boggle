import webpack from 'webpack';
import config from '../../webpack.dev.config';
import middleware from 'webpack-dev-middleware';

const compiler = webpack(config);

export default middleware(compiler, {
  inline: true,
  hot: true,
  publicPath: '/',
  stats: {
    colors: true
  }
});
