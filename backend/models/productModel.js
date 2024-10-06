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
        required: true,
        default: 1, // Default count if not specified
    },
    imageUrl: {
        type: String,
        required: true, // Make this field required
    },
}, {
    timestamps: true, // Optional: adds createdAt and updatedAt fields
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
