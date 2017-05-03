import {JSDOM} from 'jsdom';
import request from 'supertest';
import {createServer} from '../helper';

describe('Server', () => {
  let server;

  beforeEach(() => {
    server = createServer();
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
          const dom = new JSDOM(res.text);
          const board = dom.window.document.getElementById('board');
          expect(typeof board).to.equal('object');
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
          const dom = new JSDOM(res.text);
          const title = dom.window.document.getElementsByTagName('h2')[0];

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
        .expect((res) => {
          expect(res.text).to.be.equal('Not found');
        })
        .end(done);
    });
  });
});
