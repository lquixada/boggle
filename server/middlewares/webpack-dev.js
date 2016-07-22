import middleware from 'webpack-dev-middleware';
import { compiler } from '../helper';

export default middleware(compiler, {
  noInfo: true,
  publicPath: '/'
});
