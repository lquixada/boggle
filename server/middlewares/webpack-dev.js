import webpack from 'webpack';
import config from '../../webpack.dev.config';
import middleware from 'webpack-dev-middleware';

const compiler = webpack(config);

export default middleware(compiler, {
  inline: true,
  hot: true,
  publicPath: '/',
  host: '0.0.0.0',
  port: 8000,
  stats: {
    colors: true
  }
});
