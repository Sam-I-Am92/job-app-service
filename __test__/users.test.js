const app = require('../src/index.js');
// import supertest to allow tests to make http requests
const supertest = require('supertest');
const request = supertest(app);

describe('User functionality', () => {
  it('should get reply from status route', async done => {
    // send GET request to /status/test endpoint
    const response = await request.get('/status');

    expect(response.status).toBe(200);
    expect(response.body).toBe("Hello World!");
    done();
  });
  it('should return user id entered into url', async done => {
    // send GET request to /users/:id
    const response = await request.get('/users/test/5');

    expect(response.status).toBe(200);
    expect(response.body).toBe("5");
    done();
  });
});