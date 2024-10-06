const Product = require('../models/productModel');

// @desc Create new product
// @route POST /api/products
const createProduct = async (req, res) => {
  const { name, price, description } = req.body;

  const product = new Product({
    name,
    price,
    description,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

module.exports = { createProduct };
