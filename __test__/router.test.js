// test functionality of server boilerplate

const router = require('../src/routes/routes.js');

describe('Should check response from server', () => {
  it('Should recieve timestamp as response from server', () => {
    expect(router.res).toEqual(Date.now());
  });
});