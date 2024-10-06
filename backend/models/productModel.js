// models/productModel.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        default: 1, // Default count set to 1
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
