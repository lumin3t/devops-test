const request = require('supertest');
const app = require('./server');

describe('Basic Server Tests', () => {
  it('should return "Hello from backend!" on the API route', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello from backend!');
  });
});