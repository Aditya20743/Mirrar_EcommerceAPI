# Backend_Assignment

# E-commerce Application

Welcome to our E-commerce Application! This README provides essential information on running the project, interacting with the API, architectural decisions, assumptions made during development, and additional instructions.

## Getting Started

# Technologies Used

This Node.js Express application utilizes the following technologies and tools:

## Backend

- **Node.js**: A JavaScript runtime for server-side development.
- **Express.js**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database for storing and retrieving data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **npm**: The package manager for JavaScript.

## Testing

- **Mocha**: A JavaScript test framework.
- **Chai**: A BDD/TDD assertion library for Node.js.
- **Chai-HTTP**: An HTTP integration testing library for Chai.

## Additional Tools

- **Postman**: A collaboration platform for API development and testing.
- **VS Code**: An integrated development environment (IDE) for coding.

## Dependencies

Check the `package.json` file for a full list of project dependencies.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Aditya20743/Backend_Assignment.git
   ```

2. **Install dependencies:**

   ```bash
   cd <project-directory>
   npm install
   ```

## Running the Project

To run the project, follow these steps:

1. **Run the application:**

   ```bash
   nodemon index.js
   ```

   The application will be accessible at `http://localhost:3000`.

## API Documentation

### Product Endpoints

- **Create Product**

  - Method: POST
  - URL: `/api/products`
  - Request Body: JSON with product details

- **Get Product by ID**

  - Method: GET
  - URL: `/api/products/:productId`

- **Update Product by ID**

  - Method: PUT
  - URL: `/api/products/:productId`
  - Request Body: JSON with updated product details

- **Delete Product by ID**

  - Method: DELETE
  - URL: `/api/products/:productId`

- **Search for Products**
  - Method: GET
  - URL: `/api/products`
  - Query Parameters: Specify search criteria as needed

### Variant Endpoints

- **Create Variant for a Product**

  - Method: POST
  - URL: `/api/products/:productId/variants`
  - Request Body: JSON with variant details

- **Get Variant by ID for a Product**

  - Method: GET
  - URL: `/api/products/:productId/variants/:variantId`

- **Update Variant by ID for a Product**

  - Method: PUT
  - URL: `/api/products/:productId/variants/:variantId`
  - Request Body: JSON with updated variant details

- **Delete Variant by ID for a Product**
  - Method: DELETE
  - URL: `/api/products/:productId/variants/:variantId`

## Architectural Decisions

- **Database Schema:**

This e-commerce application utilizes a MongoDB database with a schema design that emphasizes simplicity and performance. Below are key assumptions and considerations regarding the schema design:

### Assumptions and Design Choices

1. **Limited Variants per Product:**

   - The schema assumes a reasonable number of variants per product, avoiding performance issues associated with a rapidly growing array of variants.

2. **Embedded Variant Data:**

   - Variant information is embedded within each product document. This design suits scenarios where variants are closely tied to the product and lack an independent lifecycle.

3. **Querying Variants via Product:**

   - Primary access to variant data is through the associated product. Queries for variants typically involve retrieving the entire product document.

4. **Normalized Indexing:**

   - Indexing is applied to variant fields, optimizing queries based on these properties. This is beneficial for efficient searching and filtering.

5. **Balanced Read-Write Operations:**

   - The design assumes a balanced ratio of read-to-write operations. Frequent updates to individual variants won't significantly impact performance.

6. **Simplicity Over Complexity:**

   - The schema design prioritizes simplicity. It is suitable for scenarios where the complexity introduced by separate models for products and variants is not justified.

7. **Normalized Database Structure:**
   - The design aims for a normalized database structure by embedding variants within the product. This enhances data consistency and reduces redundancy.

The schema aligns with requirements, allowing variants to be displayed alongside their parent product seamlessly.

# Testing

# Product Controller Tests

## Unit Testing

### Create Product

- **Endpoint:** POST /api/products
- **Description:** Validates creation and response.

### Get Product by ID

- **Endpoint:** GET /api/products/:productId
- **Description:** Validates retrieval and response.

### Update Product by ID

- **Endpoint:** PUT /api/products/:productId
- **Description:** Validates update and response.

### Delete Product by ID

- **Endpoint:** DELETE /api/products/:productId
- **Description:** Validates deletion and response.

### Search Products

- **Endpoint:** GET /api/products?search=:searchTerm
- **Description:** Validates search and response.

## Integration Testing

- Minimal integration testing focuses on isolated functionality.

# Variant Controller Tests

## Unit Testing

### Create Variant

- **Endpoint:** POST /api/products/:productId/variants
- **Description:** Validates creation and response.

### Get Variant by ID

- **Endpoint:** GET /api/products/:productId/variants/:variantId
- **Description:** Validates retrieval and response.

### Update Variant by ID

- **Endpoint:** PUT /api/products/:productId/variants/:variantId
- **Description:** Validates update and response.

### Delete Variant by ID

- **Endpoint:** DELETE /api/products/:productId/variants/:variantId
- **Description:** Validates deletion and response.

## Integration Testing

- Limited integration testing, focusing on isolated functionality.

## Running Tests:

- npm test
- Monitor the console for results.

If you have any specific concerns, questions, or additional requirements related to the project, please let me know, and I'll be happy to assist.
