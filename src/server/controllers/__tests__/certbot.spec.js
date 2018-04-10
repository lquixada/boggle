import fs from 'fs';
import request from 'supertest';

describe('Certbot API', () => {
  let server;

  beforeEach(() => {
    server = require('../../../server');
    server = server.default.listen(0);
  });

  afterEach((done) => {
    server.close((done));
  });

  describe('GET Challenge', () => {
    beforeEach(() => {
      jest.spyOn(fs, 'readFile')
        .mockImplementation((file, cb) => cb(null, 's0m3k3y'));
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('is a valid path', (done) => {
      request(server)
        .get('/.well-known/acme-challenge/s0m3k3y')
        .expect(200, done);
    });

    it('renders certbot challenge', (done) => {
      request(server)
        .get('/.well-known/acme-challenge/s0m3k3y')
        .expect((res) => {
          expect(res.text).toBe('s0m3k3y');
        })
        .end(done);
    });
  });

  describe('POST Challenge', () => {
    beforeEach(() => {
      jest.spyOn(fs, 'writeFile')
        .mockImplementation((file, content, cb) => cb(null, 's0m3k3y'));
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('is a valid path', (done) => {
      request(server)
        .post('/.well-known/acme-challenge/')
        .type('form')
        .send({key: 's0m3k3y'})
        .expect(200, done);
    });

    it('renders certbot challenge', (done) => {
      request(server)
        .post('/.well-known/acme-challenge/')
        .type('form')
        .send({key: 's0m3k3y'})
        .expect((res) => {
          expect(res.text).toBe('Challenge set to: s0m3k3y');
        })
        .end(done);
    });
  });
});
