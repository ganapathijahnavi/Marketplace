const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require("./src/routes/auth");
const categoryRoutes = require('./src/routes/category');
const projectRoutes = require('./src/routes/projectRoutes');
const footprintRoutes = require('./src/routes/footprintRoutes');
const reviewRoutes = require('./src/routes/reviewRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const cartRoutes = require('./src/routes/cartRoutes');
const adminRoutes = require('./src/routes/admin');     
const userRoutes = require('./src/routes/users');  
// const paymentsRoutes = require('./src/routes/payments');



// Mount routes
app.use("/", authRoutes);
app.use('/category', categoryRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/footprint", footprintRoutes);
app.use("/api/reviews", reviewRoutes);  
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/admin', adminRoutes);
app.use('/users', userRoutes);
// app.use('/payments', paymentsRoutes);

// MongoDB connection with SSL/TLS settings
const mongoOptions = {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

mongoose.connect(process.env.MONGO_URI, mongoOptions)
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => {
  console.error("❌ MongoDB Error:", err.message);
  console.log("Tip: Check your MongoDB Atlas IP whitelist and credentials");
});

// Health route
app.get("/", (req, res) => {
  res.send("ShopSmart API is running...");
});

// Start server
const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
});
