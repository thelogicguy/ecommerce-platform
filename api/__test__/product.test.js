const request = require('supertest');
const express = require('express');

// Simulate the Express app
const app = express();
app.get('/products', (req, res) => {
  res.json({ message: 'Product list' });
});

describe('GET /products', () => {
  it('should return product list', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Product list');
  });
});

