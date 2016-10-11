require('babel-core/register');

require.extensions['.scss'] = () => {};

const PORT = process.env.PORT || 9000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const server = require('./server');

server.default.listen(PORT, () => {
  console.info(`Server running on: http://localhost:${PORT}/`);
});
