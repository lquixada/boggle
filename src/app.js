const {PORT = 3000} = process.env;
const server = require('./server');

server.default.listen(PORT, () => {
  console.info(`Server running on: http://localhost:${PORT}/`);
});
