const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
  name: { type: String, index: true },
  sku: { type: String, index: true },
  additionalCost: Number,
  stockCount: Number,
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  variants: [variantSchema],
});

// Adding indexes for frequently queried fields
productSchema.index({ 'variants.name': 1, 'variants.sku': 1 });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
