import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

// Common / Public Components
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Registration from './components/Registration';
import FootprintCalculator from './components/FootprintCalculator';

// User Protected Components
import ProtectedRoute from './components/ProtectedRoute';
import Products from './components/projects';
import ProjectDetails from './components/projectDetails';
import Checkout from './components/Checkout';
import MyOrders from './components/MyOrders';
import History from './components/History';
import MyCart from './components/MyCart';
import Payments from './components/Payments';

// Admin Protected Components
import AdminProtectedRoute from './admin_components/AdminProtectedRoute';
import Dashboard from './admin_components/Dashoard';
import Users from './admin_components/Users';
import Orders from './admin_components/Orders';
import AddCategory from './admin_components/AddCategory';
import AddProduct from './admin_components/AddProject';
import AdminProducts from './admin_components/Products';
import AdminProductItem from './admin_components/ProductItem';
import UpdateProduct from './admin_components/Update';
import EditProduct from './admin_components/EditProduct';

/**
 * Main App Component
 * Handles all routing for the Marketplace application
 * - Public routes (Home, Login, Signup)
 * - Protected user routes (Shopping, Orders, Cart)
 * - Protected admin routes (Dashboard, User Management)
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/footprint-calculator" element={<FootprintCalculator />} />

          {/* User Protected Routes */}
          <Route path="/shopping" element={<ProtectedRoute Component={Products} />} />
          <Route path="/project-details/:id" element={<ProtectedRoute Component={ProjectDetails} />} />

          {/* Cart & Checkout */}
          <Route path="/my-cart" element={<ProtectedRoute Component={MyCart} />} />
          <Route path="/order-details" element={<ProtectedRoute Component={Checkout} />} />
          <Route path="/order-details/:id" element={<ProtectedRoute Component={Checkout} />} />

          {/* Orders & History */}
          <Route path="/my-orders" element={<ProtectedRoute Component={MyOrders} />} />
          <Route path="/my-history" element={<ProtectedRoute Component={History} />} />

          {/* Payments */}
          <Route path="/payments" element={<ProtectedRoute Component={Payments} />} />

          {/* Admin Protected Routes */}
          <Route path="/admin/dashboard" element={<AdminProtectedRoute Component={Dashboard} />} />

          {/* User Management */}
          <Route path="/admin/users" element={<AdminProtectedRoute Component={Users} />} />

          {/* Order Management */}
          <Route path="/admin/orders" element={<AdminProtectedRoute Component={Orders} />} />

          {/* Category Management */}
          <Route path="/admin/add-category" element={<AdminProtectedRoute Component={AddCategory} />} />

          {/* Product Management */}
          <Route path="/admin/all-products" element={<AdminProtectedRoute Component={AdminProducts} />} />
          <Route path="/admin/product/:id" element={<AdminProtectedRoute Component={AdminProductItem} />} />
          <Route path="/admin/add-product" element={<AdminProtectedRoute Component={AddProduct} />} />
          <Route path="/admin/edit-product/:id" element={<AdminProtectedRoute Component={EditProduct} />} />
          <Route path="/admin/product-update/:id" element={<AdminProtectedRoute Component={UpdateProduct} />} />

          {/* 404 Not Found */}
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

