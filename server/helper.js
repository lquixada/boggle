import webpack from 'webpack';
import config from '../webpack.dev.config';

export const compiler = webpack(config);
