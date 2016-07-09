import webpack from 'webpack';
import config from '../webpack.dev.config';
import middleware from 'webpack-hot-middleware';

const compiler = webpack(config);

export default middleware(compiler);
