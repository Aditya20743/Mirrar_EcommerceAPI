const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const variantController = require('../controllers/variantController');

// Product routes
router.post('/products', productController.createProduct);
router.get('/products/:productId', productController.getProduct); 
router.put('/products/:productId', productController.updateProduct);
router.delete('/products/:productId', productController.deleteProduct);
router.get('/products', productController.searchProducts);

// Variant routes
router.post('/products/:productId/variants', variantController.createVariant);
router.get('/products/:productId/variants/:variantId', variantController.getVariant);
router.put('/products/:productId/variants/:variantId', variantController.updateVariant);
router.delete('/products/:productId/variants/:variantId', variantController.deleteVariant);

module.exports = router;
