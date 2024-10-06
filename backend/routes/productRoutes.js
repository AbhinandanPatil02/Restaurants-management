// productRoutes.js

const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// Route to create a new product
router.post('/', async (req, res) => {
    const { name, price, description, count } = req.body;

    const product = new Product({
        name,
        price,
        description,
        count,
    });

    try {
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to fetch all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to delete a product
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to update product count
router.patch('/:id', async (req, res) => {
    const { count } = req.body;

    try {
        const product = await Product.findByIdAndUpdate(req.params.id, { count }, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
