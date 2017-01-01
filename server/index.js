import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import secureMiddleware from './middlewares/secure';
import loggerMiddleware from './middlewares/logger';
import staticMiddleware from './middlewares/static';
import certbotController from './controllers/certbot';
import indexController from './controllers/index';

// For semantic purposes, app is equivalent to server.
const server = express();

/* Middlewares */
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const webpackMiddlewares = require('./middlewares/webpack').default;

  server.use(...webpackMiddlewares);
}

if (process.env.NODE_ENV === 'production') {
  server.use(secureMiddleware);
  server.use(compression());
  server.use(helmet());
}

server.use(loggerMiddleware);
server.use(staticMiddleware);

/* Controllers */
server.use('/.well-known/acme-challenge/', certbotController);
server.use('/', indexController);

export default server;
