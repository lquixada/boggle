const request = require('supertest');
const { rerequire } = require('../helper');

describe('Server rendering', () => {
  let server;

  beforeEach(() => {
    process.env.PORT = 8001;
    server = rerequire('../server');
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
