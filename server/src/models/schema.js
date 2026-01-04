const mongoose = require('mongoose');

// Database Schemas

// User Schema
/**
 * Stores user account information and authentication details
 * Fields:
 *   - firstname: User's first name
 *   - lastname: User's last name
 *   - username: Unique identifier for user (unique constraint)
 *   - email: User's email address (unique constraint)
 *   - password: Hashed password for authentication
 *   - role: User role (enum: 'user' or 'admin'), defaults to 'user'
 *   - timestamps: Auto-generated createdAt and updatedAt fields
 */
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: { 
    type: String, 
    unique: true 
  },
  email: { 
    type: String, 
    unique: true 
  },
  password: String,
  role: { 
    type: String, 
    enum: ['user', 'admin'], 
    default: 'user' 
  }
}, { timestamps: true });

// Category Schema
/**
 * Stores product categories for organization and filtering
 * Fields:
 *   - category: Category name (required, unique)
 *   - description: Detailed description of the category
 *   - timestamps: Auto-generated createdAt and updatedAt fields
 */
const categorySchema = new mongoose.Schema({
  category: { 
    type: String, 
    required: true, 
    unique: true 
  },
  description: String
}, { timestamps: true });

// ============================================
// PRODUCT SCHEMA
// Product Schemaarketplace
 * Fields:
 *   - productName: Name of the product (required)
 *   - description: Product description and details
 *   - price: Product price in currency (required)
 *   - image: URL or path to product image
 *   - category: Reference to Category document (ObjectId)
 *   - countInStock: Available quantity (required)
 *   - rating: Average product rating (default: 0)
 *   - timestamps: Auto-generated createdAt and updatedAt fields
 */
const productSchema = new mongoose.Schema({
  productName: { 
    type: String, 
    required: true 
  },
  description: String,
  price: { 
    type: Number, 
    required: true 
  },
  image: String,
  category: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Category' 
  },
  countInStock: { 
    type: Number, 
    required: true 
  },
  rating: { 
    type: Number, 
    default: 0 
  }
}, { timestamps: true });

// ============================================
// CART SCHEMA
// Cart Schema
 * Fields:
 *   - userId: Reference to User document (required)
 *   - productId: Reference to Product document (required)
 *   - productName: Denormalized product name for display
 *   - quantity: Number of items in cart (default: 1, min: 1)
 *   - timestamps: Auto-generated createdAt and updatedAt fields
 */
const addToCartSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  productId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product', 
    required: true 
  },
  productName: { 
    type: String, 
    required: true 
  },
  quantity: { 
    type: Number, 
    default: 1, 
    min: 1 
  }
}, { timestamps: true });

// ============================================
// ORDER SCHEMA
// ============================================
/**
 * Order Schema
 *   - lastname: Customer's last name
 *   - phone: Customer contact phone number
 *   - address: Delivery address
 *   - productId: Reference to Product document (required)
 *   - productName: Denormalized product name
 *   - quantity: Number of items ordered
 *   - price: Order price
 *   - paymentMethod: Payment method used (e.g., 'credit_card', 'paypal')
 *   - user: Reference to User document (required)
 *   - status: Order status (default: 'Processing')
 *   - timestamps: Auto-generated createdAt and updatedAt fields
 */
const orderSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  phone: String,
  address: String,
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  productName: String,
  quantity: Number,
  price: Number,
  paymentMethod: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    default: 'Processing'
  }
}, { timestamps: true });

// ============================================
// PAYMENT SCHEMA
// ============================================
/**
 * Stores payment transaction records
 * Fields:
 * Payment Schemaired)
 *   - amount: Payment amount in currency (required)
 *   - paymentMethod: Payment method (required)
 *   - deliveryStatus: Status of delivery (required)
 *   - status: Payment status (enum: 'Pending', 'Success', 'Failed', default: 'Pending')
 *   - timestamps: Auto-generated createdAt and updatedAt fields
 */
const paymentSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  order: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Order', 
    required: true 
  },
  amount: { 
    type: Number, 
    required: true 
  },
  paymentMethod: { 
    type: String, 
    required: true 
  },
  deliveryStatus: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['Pending', 'Success', 'Failed'], 
    default: 'Pending' 
  }
}, { timestamps: true });

// ============================================
// FEEDBACK SCHEMA
// ============================================
/**
 * Stores user feedback and reviews
 * Fields:
 * Feedback Schema updatedAt fields
 */
const feedbackSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  message: { 
    type: String, 
    required: true 
  }
}, { timestamps: true });

// ============================================
// MODEL EXPORTS
// ============================================
/**
 * Export all Mongoose models for use throughout the application
 */
const models = {
  Users: mongoose.model('User', userSchema),
  CModel ExportsartSchema),
  Order: mongoose.model('Order', orderSchema),
  Payment: mongoose.model('Payment', paymentSchema),
  Feedback: mongoose.model('Feedback', feedbackSchema)
};

module.exports = models;
