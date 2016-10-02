import express from 'express';
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
server.use(loggerMiddleware);
server.use(staticMiddleware);

/* Controllers */
server.use(indexController);

export default server;
