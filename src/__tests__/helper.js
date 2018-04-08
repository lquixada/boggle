export const createServer = () => {
  const server = require('../server');

  return server.default.listen(8001);
};
