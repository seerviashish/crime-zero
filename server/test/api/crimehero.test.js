const request = require('supertest');
const httpStatus = require('http-status');
const server = require('../../src/server');

describe('API TEST', () => {
  describe('GET /status', () => {
    it('Get /status api call should give json and up status.', () => {
      return request(server)
        .get('/status')
        .expect('Content-Type', /json/)
        .expect(httpStatus.OK)
        .expect({status: 'UP'})
        .expect(200);
    });
    it('Get /status/status api call should give error 404.', () => {
      return request(server)
        .get('/status/status')
        .expect('Content-Type', /text/)
        .expect('Content-Type', /html/)
        .expect(httpStatus.NOT_FOUND)
        .expect(404);
    });
    it('Get /statusda api call should give text/html and error 404.', () => {
      return request(server)
        .get('/status/status')
        .expect('Content-Type', /text/)
        .expect('Content-Type', /html/)
        .expect(httpStatus.NOT_FOUND)
        .expect(404);
    });
  });

  describe('GET /hero?code=0<space><code>', () => {
    it('Get /hero?code=0 8467 api call with x-client-id header should give json and response code 200.', done => {
      request(server)
        .get('/hero?code=0 8467')
        .set('x-client-id', 'crimehero123')
        .expect('Content-Type', /json/)
        .expect(httpStatus.OK)
        .expect(200, done);
    });
    it('Get /hero?code=0 8467 api call without x-client-id header should give response code 404.', done => {
      request(server).get('/hero?code=0 8467').expect(404, done);
    });
    it('Get /hero api call without x-client-id header should give response code 403.', done => {
      request(server)
        .get('/hero')
        .expect('Content-Type', /json/)
        .expect(httpStatus.FORBIDDEN)
        .expect(403, done);
    });
    it('Get /hero api call with x-client-id header should give text/html and response code 404.', () => {
      return request(server)
        .get('/hero')
        .set('x-client-id', 'crimehero123')
        .expect('Content-Type', /text/)
        .expect('Content-Type', /html/)
        .expect(httpStatus.NOT_FOUND)
        .expect(404);
    });
    it('Get /hero?code=0 8467 api call with validated code and x-client-id header should give json and response code 200.', async () => {
      return request(server)
        .get('/hero?code=0 8467')
        .set('x-client-id', 'crimehero123')
        .expect('Content-Type', /json/)
        .expect(httpStatus.OK)
        .expect(200)
        .expect({
          hero: 'THOR'
        });
    });
    it('Get /hero?code=0 80267 api call with not validated code and x-client-id header should give html/text and response code 404.', async () => {
      return request(server)
        .get('/hero?code=0 80267')
        .set('x-client-id', 'crimehero123')
        .expect('Content-Type', /html/)
        .expect('Content-Type', /text/)
        .expect(httpStatus.NOT_FOUND)
        .expect(404);
    });
    it('Get /hero?code=0 5555 api call with validated code and x-client-id header should give json and response code 403.', async () => {
      return request(server)
        .get('/hero?code=0 5555')
        .set('x-client-id', 'crimehero123')
        .expect('Content-Type', /json/)
        .expect(httpStatus.FORBIDDEN)
        .expect(403);
    });
  });
});
