const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // Import CORS
const productRoutes = require('./routes/productRoutes');

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for all routes
app.use(cors());  // Use CORS middleware

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

// Call the connectDB function
connectDB();

// Define routes
app.use('/api/products', productRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
