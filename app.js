require('babel-core/register');
require.extensions['.scss'] = function () {};

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
const server = require('./server');
const PORT = process.env.PORT || 9000;
const NODE_ENV =  process.env.NODE_ENV || 'development';

if (cluster.isMaster && NODE_ENV === 'production') {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  server.default.listen(PORT, () => {
    console.info(`Server running on: http://localhost:${PORT}/`);
  });
}
