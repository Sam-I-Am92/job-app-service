// test functionality of server boilerplate
const app = require('../src/index.js');
// import supertest to allow tests to make http requests
const supertest = require('supertest');

const request = supertest(app);

describe('Test the server endpoints', () => {
  it('Should get response from test endpoint', async done => {
    // sends GET request to /status/test endpoint
    const response = await request.get('/status/test');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Pass!');
    done();
  });
  it('Should get message from the status endpoint', async done => {
    const response = await request.get('/status');
    // console.log('Test Response: ', response);

    expect(response.status).toBe(200);
    expect(response.body).toBe(`Hello World!`);
    done();
  });
});