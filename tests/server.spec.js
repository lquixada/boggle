const request = require('supertest');
const { rerequire } = require('./helper');

describe('Server rendering', () => {
  let server;

  beforeEach(() => {
    server = rerequire('../server');
    console.info = () => { /* SILENCE! I'LL KILL YA 💀 */ }
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
