const { expect } = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const app = require('../index');
const Product = require('../src/models/productModel');

chai.use(chaiHttp);

// Clear the database before running tests
beforeEach(async () => {
  await Product.deleteMany();
});

describe('Product API', () => {
  describe('GET /api/products/:productId', () => {
    it('should get a product by ID', async () => {
      const product = new Product({
        name: 'Test Product',
        description: 'A test product',
        price: 10.99,
      });
      await product.save();

      const res = await chai.request(app).get(`/api/products/${product._id}`);

      expect(res).to.have.status(200);
      expect(res.body).to.have.property('name', 'Test Product');
      // Add more assertions based on your product schema
    });

    it('should return 404 if product not found', async () => {
      const res = await chai.request(app).get('/api/products/nonexistentID');

      expect(res).to.have.status(404);
      expect(res.body).to.have.property('message', 'Product not found');
    });
  });

  // Add more tests for other product CRUD operations if needed

  // Variant tests
  describe('GET /api/products/:productId/variants/:variantId', () => {
    it('should get a variant by ID', async () => {
      const product = new Product({
        name: 'Test Product',
        description: 'A test product',
        price: 10.99,
        variants: [{
          name: 'Test Variant',
          sku: 'TEST123',
          additionalCost: 5.00,
          stockCount: 20,
        }],
      });
      await product.save();

      const res = await chai.request(app)
        .get(`/api/products/${product._id}/variants/${product.variants[0]._id}`);

      expect(res).to.have.status(200);
      expect(res.body).to.have.property('name', 'Test Variant');
      // Add more assertions based on your variant schema
    });

    it('should return 404 if product or variant not found', async () => {
      const res = await chai.request(app)
        .get('/api/products/nonexistentID/variants/nonexistentID');

      expect(res).to.have.status(404);
      expect(res.body).to.have.property('message', 'Product not found');
    });
  });

  // Add more tests for other variant CRUD operations if needed
});
