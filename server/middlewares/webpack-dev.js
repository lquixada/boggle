import middleware from 'webpack-dev-middleware';
import config from '../../webpack.dev.config';
import { compiler } from '../helper';

export default middleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
});
