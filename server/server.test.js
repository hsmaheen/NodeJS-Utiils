const request = require('supertest');
const expect = require('chai').expect;

let app = require('./server').app;

describe('HTTP Test Suit', () => {
  it('should return hello world', done => {
    request(app)
      .get('/')
      .expect(200)
      .expect(res => {
        expect(res.body).to.include({
          ans: 'Hello World'
        });
      })
      .end(done);
  });
});
