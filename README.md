# Backend_Assignment
# E-commerce Application

Welcome to our E-commerce Application! This README provides essential information on running the project, interacting with the API, architectural decisions, assumptions made during development, and additional instructions.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/try/download/community) (Database)

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

...

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
