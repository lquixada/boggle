import request from 'supertest';

describe('Game API', () => {
  let server;

  beforeEach(() => {
    server = require('../../../server');
    server = server.default.listen(0);
  });

  afterEach((done) => {
    server.close((done));
  });

  describe('/', () => {
    it('is a valid path', (done) => {
      request(server)
        .get('/')
        .expect(200, done);
    });

    it('renders the game page', (done) => {
      request(server)
        .get('/')
        .expect((res) => {
          document.writeln(res.text);
          const board = document.getElementById('board');
          expect(typeof board).toBe('object');
        })
        .end(done);
    });
  });

  describe('/about', () => {
    it('is a valid path', (done) => {
      request(server)
        .get('/about')
        .expect(200, done);
    });

    it('renders the "About me" page', (done) => {
      request(server)
        .get('/about')
        .expect((res) => {
          document.writeln(res.text);
          const title = document.getElementsByTagName('h2')[0];
          expect(title.innerHTML).toBe('About me');
        })
        .end(done);
    });
  });

  describe('/unknownpage', () => {
    it('is not a valid page', (done) => {
      request(server)
        .get('/unknownpage')
        .expect(404, done);
    });

    it('renders the "Not found" page', (done) => {
      request(server)
        .get('/unknownpage')
        .expect((res) => {
          expect(res.text).toBe('Not found');
        })
        .end(done);
    });
  });
});
