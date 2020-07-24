const request = require('supertest');
const server = require('../../src/server');

describe('API TEST', () => {
  describe('GET /status', () => {
    it('Get /status api call should give json and up status.', done => {
      request(server)
        .get('/status')
        .expect('Content-Type', /json/)
        .expect({status: 'UP'})
        .expect(200, done);
    });
    it('Get /status/status api call should give error 404.', done => {
      request(server)
        .get('/status/status')
        .expect('Content-Type', /text/)
        .expect('Content-Type', /html/)
        .expect(404, done);
    });
    it('Get /statusda api call should give text/html and error 404.', done => {
      request(server)
        .get('/status/status')
        .expect('Content-Type', /text/)
        .expect('Content-Type', /html/)
        .expect(404, done);
    });
  });

  describe('GET /hero?code=0 8467', () => {
    it('Get /hero?code=0 8467 api call with x-client-id header should give json and response code 200.', done => {
      request(server)
        .get('/hero?code=0 8467')
        .set('x-client-id', 'crimehero123')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    it('Get /hero?code=0 8467 api call without x-client-id header should give response code 404.', done => {
      request(server).get('/hero?code=0 8467').expect(404, done);
    });
    it('Get /hero api call without x-client-id header should give response code 403.', done => {
      request(server)
        .get('/hero')
        .expect('Content-Type', /json/)
        .expect(403, done);
    });
    it('Get /hero api call with x-client-id header should give text/html and response code 404.', done => {
      request(server)
        .get('/hero')
        .set('x-client-id', 'crimehero123')
        .expect('Content-Type', /text/)
        .expect('Content-Type', /html/)
        .expect(404, done);
    });
    it('Get /hero?code=0 55055 api call with not validated code and x-client-id header should give json and response code 403.', done => {
      request(server)
        .get('/hero?code=0 55055')
        .set('x-client-id', 'crimehero123')
        .expect('Content-Type', /json/)
        .expect(403, done);
    });
    // it('Get /hero?code=0 5555 api call with validated code and x-client-id header should give text/html and response code 404.', async done => {
    //   const heroResponse = await request(server)
    //     .get('/hero?code=0 5555')
    //     .set('Accept', 'application/json')
    //     .set('x-client-id', 'crimehero123');
    //   console.log('heroResponse==>', heroResponseJson);
    //   const result = expect(heroResponse).expect(200);
    // });
  });
});
