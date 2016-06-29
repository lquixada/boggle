const request = require('supertest');

describe('Server rendering', () => {
  let server;

  beforeEach(() => {
    server = require('../../server');
  });

  afterEach(() => {
    server.close();
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
