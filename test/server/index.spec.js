import {jsdom} from 'jsdom';
import request from 'supertest';
import {createServer} from '../helper';

describe('Server', () => {
  let server;

  beforeEach(() => {
    server = createServer();
  });

  afterEach((done) => {
    server.close(done);
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
        .expect(res => {
          const doc = jsdom(res.text);
          const board = doc.getElementById('board');

          expect(board).to.be.an('object');;
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
        .expect(res => {
          const doc = jsdom(res.text);
          const title = doc.getElementsByTagName('h2')[0];

          expect(title.innerHTML).to.be.equal('About me');
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
        .expect(res => {
          expect(res.text).to.be.equal('Not found');
        })
        .end(done);
    });
  });
});
