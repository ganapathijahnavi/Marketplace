// Imports & Configuration
const express = require("express");
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Initialize Express App
const app = express();
const port = process.env.PORT || 5100;

// Load database connection and models
const { MONGO_URI } = require('./db/connect');
const models = require("./models/schema");
const categoryRoutes = require('./routes/category');

// Middleware Setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/category', categoryRoutes);

// ============================================
// DATABASE CONNECTION
// ============================================
Database Connection  .catch(err => console.error("❌ MongoDB connection failed:", err));

// ============================================
// AUTHENTICATION MIDDLEWARE
// ============================================

/**
 * Middleware to verify admin JWT tokens
 * Authentication Middlewareware function
 */
const adminAuthenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  
  jwt.verify(token, process.env.ADMIN_SECRET_TOKEN || 'ADMIN_SECRET_TOKEN', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

/**
 * Middleware to verify user JWT tokens
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const userAuthenticateToken = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    
    const decoded = jwt.verify(token, process.env.USER_SECRET_TOKEN || 'USER_SECRET_TOKEN');
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error('Authentication error:', err);
    res.status(500).json({ message: 'Authentication server error' });
  }
};

// ============================================
// AUTHENTICATION ROUTES
// ============================================

/**
 * POST /login - Authenticate user and return JWT token
 * @param {string} email - User email
 * @param {string} password - User password
 */Authentication Routes
  
  try {
    // Find user by email
    const user = await models.Users.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Verify password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Normalize role and select appropriate secret
    const role = user.role?.toLowerCase() || 'user';
    const secret = role === 'admin' 
      ? (process.env.ADMIN_SECRET_TOKEN || 'ADMIN_SECRET_TOKEN')
      : (process.env.USER_SECRET_TOKEN || 'USER_SECRET_TOKEN');

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, role },
      secret,
      { expiresIn: '1d' }
    );

    res.json({ 
      user: { ...user._doc, role }, 
      token,
      message: 'Login successful'
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Internal server error during login' });
  }
});

/**
 * POST /register - Create new user account
 * @param {string} firstname - User first name
 * @param {string} lastname - User last name
 * @param {string} username - Unique username
 * @param {string} email - Unique email address
 * @param {string} password - User password
 */
app.post('/register', async (req, res) => {
  try {
    const { firstname, lastname, username, email, password } = req.body;
    
    // Check if user already exists
    const existing = await models.Users.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }
============================================
// USER ROUTES
// ============================================

/**
 * GET /users - Retrieve all users (Admin only)
 */
// User Routes
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error retrieving users' }
      email, 
      password: hashedPassword 
    });
    
    await newUser.save();
    res.status(201).json({ message: 'User successfully registered' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Error during registration' });
  }
});

// GET USERS (admin only)
app.get('/users', adminAuthenticateToken, async (req, res) => {
  try {
    const users = await models.Users.find();
    res.json(users);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// GET ALL PRODUCTS
app.get('/products', async (req, res) => {
  try {
    const products = await models.Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET PRODUCT BY ID
app.get('/products/:id', async (req, res) => {
  try {
    const product = await models.Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// CREATE PRODUCT (admin only)
app.post('/products', adminAuthenticateToken, async (req, res) => {
  try {
    const { productName, description, price, image, category, countInStock, rating } = req.body;
    if (!productName || !description || !price || !image || !category || !countInStock) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const categoryDoc = await models.Category.findOne({ category });
    if (!categoryDoc) return res.status(404).json({ message: 'Category not found' });

    const newProduct = new models.Product({
      productName,
      description,
      price,
      image,
      category: categoryDoc._id,
      countInStock,
      rating
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// UPDATE PRODUCT (admin only)
app.put('/products/:id', adminAuthenticateToken, async (req, res) => {
  try {
    const updateData = req.body;
    const updatedProduct = await models.Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Server error while updating product' });
  }
});

// DELETE PRODUCT (admin only)
app.delete('/products/:id', adminAuthenticateToken, async (req, res) => {
  try {
    const deleted = await models.Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// HEALTH CHECK
app.get("/", (req, res) => {
  res.send("🛒 ShopSmart backend API is running...");
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});

module.exports = app;
