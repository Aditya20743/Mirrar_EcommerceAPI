const Product = require("../models/productModel");

exports.createVariant = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    product.variants.push(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVariant = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const variant = product.variants.id(req.params.variantId);
    if (!variant) {
      return res.status(404).json({ message: "Variant not found" });
    }

    res.status(200).json(variant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateVariant = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const variant = product.variants.id(req.params.variantId);
    if (!variant) {
      return res.status(404).json({ message: "Variant not found" });
    }
    variant.set(req.body);
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteVariant = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const variantId = req.params.variantId;
    product.variants = product.variants.filter(variant => variant._id.toString() !== variantId);

    await product.save();
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

