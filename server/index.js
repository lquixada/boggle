import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import loggerMiddleware from './middlewares/logger';
import staticMiddleware from './middlewares/static';
import indexController from './controllers/index';

// For semantic purposes, app is equivalent to server.
const server = express();

/* Middlewares */
if (process.env.NODE_ENV === 'development') {
  const webpackMiddlewares = require('./middlewares/webpack').default;
  server.use(...webpackMiddlewares);
}

server.use(compression());
server.use(helmet());
server.use(loggerMiddleware);
server.use(staticMiddleware);

/* Controllers */
server.get('/.well-known/acme-challenge/rHXiP_Gx7XopJlxCUm29lfgBOkCiypV_QnwlegW1qrg', function (req, res) {
  res.send('rHXiP_Gx7XopJlxCUm29lfgBOkCiypV_QnwlegW1qrg.69bCnYYsQZKoAqYIy7V97R4RAr6UpNwn5Yiu0po1I8g');
});
server.use(indexController);

export default server;
