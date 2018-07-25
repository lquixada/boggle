import supertest from 'supertest'

import server from '../../../server'

describe('Game API', () => {
  let request

  beforeEach(() => {
    request = supertest(server)
  })

  describe('/', () => {
    it('is a valid path', (done) => {
      request
        .get('/')
        .expect(200, done)
    })

    it('renders the game page', (done) => {
      request
        .get('/')
        .expect((res) => {
          document.writeln(res.text)
          const board = document.getElementById('board')
          expect(typeof board).toBe('object')
        })
        .end(done)
    })
  })

  describe('/about', () => {
    it('is a valid path', (done) => {
      request
        .get('/about')
        .expect(200, done)
    })

    it('renders the "About me" page', (done) => {
      request
        .get('/about')
        .expect((res) => {
          document.writeln(res.text)
          const title = document.getElementsByTagName('h2')[0]
          expect(title.innerHTML).toBe('About me')
        })
        .end(done)
    })
  })

  describe('/unknownpage', () => {
    it('is not a valid page', (done) => {
      request
        .get('/unknownpage')
        .expect(404, done)
    })

    it('renders the "Not found" page', (done) => {
      request
        .get('/unknownpage')
        .expect((res) => {
          expect(res.text).toBe('Not found')
        })
        .end(done)
    })
  })
})
