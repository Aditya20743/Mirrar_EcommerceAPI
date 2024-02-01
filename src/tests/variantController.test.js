const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../../index.js");

chai.use(chaiHttp);

describe("Variant Controller Tests", () => {
  let server;
  let testProductId;
  let testVariantId;

  before(async () => {
    // Create a test product
    const productData = {
      name: "Test Product",
      description: "This is a test product",
      price: 29.99,
    };

    const productResponse = await chai
      .request(app)
      .post("/api/products")
      .send(productData);

    // Get the product ID for future use
    testProductId = productResponse.body._id;

    // Create a test variant
    const variantData = {
      name: "Test Variant",
      sku: "123456",
      additionalCost: 5.99,
      stockCount: 10,
    };

    const variantResponse = await chai
      .request(app)
      .post(`/api/products/${testProductId}/variants`)
      .send(variantData);

    // Get the variant ID for future use
    testVariantId = variantResponse.body.variants[0]._id;

    // Start the server before running tests
    server = app.listen(3002, () => {
      console.log("Server is running on port 3002");
    });
  });

  after((done) => {
    // Close the server after all tests are done
    server.close(() => {
      console.log("Server closed");
      done();
    });
  });

  it("should create a new variant", (done) => {
    const variantData = {
      name: "Test Variant",
      sku: "123456",
      additionalCost: 5.99,
      stockCount: 10,
    };

    chai
      .request(app)
      .post(`/api/products/${testProductId}/variants`)
      .send(variantData)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");
        expect(res.body.variants).to.be.an("array").that.is.not.empty;

        done();
      });
  });

  it("should get a variant by ID", (done) => {
    chai
      .request(app)
      .get(`/api/products/${testProductId}/variants/${testVariantId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");

        done();
      });
  });

  it("should update a variant by ID", (done) => {
    const updatedVariantData = {
      name: "Updated Test Variant",
      additionalCost: 7.99,
    };

    chai
      .request(app)
      .put(`/api/products/${testProductId}/variants/${testVariantId}`)
      .send(updatedVariantData)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        // Add more expectations based on your response structure

        done();
      });
  });

  it("should delete a variant by ID", (done) => {
    chai
      .request(app)
      .delete(`/api/products/${testProductId}/variants/${testVariantId}`)
      .end((err, res) => {
        expect(res).to.have.status(204);
        // Add more expectations based on your response structure

        done();
      });
  });
});
