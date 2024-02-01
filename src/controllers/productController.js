const Product = require("../models/productModel");
const productSearchHelper = require("../helpers/productSearchHelper");

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(
      req.params.productId
    );
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.searchProducts = async (req, res) => {
  try {
    let query = Product.find();
    query = productSearchHelper(query, req);

    const products = await query.exec(); // Execute the query

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
