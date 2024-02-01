const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../../index.js");

chai.use(chaiHttp);

describe("Product Controller Tests", () => {
  let server;
  const testProductId = "65bbdc90b6abc34c88bdecf9";

  before((done) => {
    // Start the server before running tests
    server = app.listen(3001, () => {
      console.log("Server is running on port 3001");
      done();
    });
  });

  after((done) => {
    // Close the server after all tests are done
    server.close(() => {
      console.log("Server closed");
      done();
    });
  });

  // Your tests go here
  it("should create a new product", (done) => {
    // Your test logic here
    const productData = {
      name: "Test Product3",
      description: "This is a test product3",
      price: 31.99,
    };
    chai
      .request(app)
      .post("/api/products")
      .send(productData)
      .end((err, res) => {
        // Your assertions
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");
        expect(res.body.name).to.equal(productData.name);
        done();
      });
  });

  it("should get a product by ID", (done) => {
    // Your test logic here

    chai
      .request(app)
      .get(`/api/products/${testProductId}`)
      .end((err, res) => {
        // Your assertions
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        done();
      });
  });

  // More tests...
  it("should update a product by ID", (done) => {
    const updatedProductData = {
        name: 'Updated Test Product58',
        description: 'Updated descriptionsd',
        price: 39.99,
    };

    chai
      .request(app)
      .put(`/api/products/${testProductId}`)
      .send(updatedProductData)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        // Add more expectations based on your response structure

        done();
      });
  });

  it("should delete a product by ID", (done) => {
    chai
      .request(app)
      .delete(`/api/products/65bbdc7399421c6726fbdb01`)
      .end((err, res) => {
        expect(res).to.have.status(204);
        // Add more expectations based on your response structure

        done();
      });
  });

  it("should search for products", (done) => {
    const searchTerm = "example"; // Update with your search term

    chai
      .request(app)
      .get(`/api/products?search=${searchTerm}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        // Add more expectations based on your response structure

        done();
      });
  });
});
