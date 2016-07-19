import middleware from 'webpack-dev-middleware';
import { compiler } from '../helper';

export default middleware(compiler, {
  publicPath: '/',
  stats: {
    colors: true
  }
});
