import middleware from 'webpack-hot-middleware';
import { compiler } from '../helper';

export default middleware(compiler);
