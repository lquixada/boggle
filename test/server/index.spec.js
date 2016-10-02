const request = require('supertest');
const { createServer } = require('../helper');

describe('Server rendering', () => {
  let server;

  beforeEach(() => {
    server = createServer();
  });

  afterEach((done) => {
    server.close(done);
  });

  it('responds to /', (done) => {
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('responds to /about', (done) => {
    request(server)
      .get('/about')
      .expect(200, done);
  });
});
