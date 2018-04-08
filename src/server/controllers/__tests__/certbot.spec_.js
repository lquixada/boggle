import request from 'supertest';

import {createServer} from '../../../__tests__/helper';

jest.mock('fs');

jest.mock('fs', () => ({
  readFile: function(f, cb) {
    cb(null, 's0m3k3y');
  }
}));

describe('Certbot API', () => {
  let server;

  beforeEach(() => {
    server = createServer();
  });

  afterEach((done) => {
    server.close((done));
  });

  afterAll(() => {
    jest.unmock('fs');
  });

  describe('GET Challenge', () => {
    it('is a valid path', (done) => {
      request(server)
        .get('/.well-known/acme-challenge/s0m3k3y')
        .expect(200, done);
    });

    it.only('renders certbot challenge', (done) => {
      request(server)
        .get('/.well-known/acme-challenge/s0m3k3y')
        .expect((res) => {
          expect(res.text).toBe('s0m3k3y');
        })
        .end(done);
    });
  });

  describe.skip('POST Challenge', () => {
    it('is a valid path', (done) => {
      request(server)
        .post('/.well-known/acme-challenge/')
        .field('key', 's0m3k3y')
        .expect(200, done);
    });

    it('renders certbot challenge', (done) => {
      request(server)
        .post('/.well-known/acme-challenge/')
        .field('key', 's0m3k3y')
        .expect((res) => {
          expect(fs.writeFile).toHaveBeenCalled();
        })
        .end(done);
    });
  });
});
