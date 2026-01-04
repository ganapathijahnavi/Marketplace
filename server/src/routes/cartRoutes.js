const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Project = require("../models/Project");
const verifyUser = require("../middleware/verifyUser");

// Add to cart (create or increment)
router.post("/add", verifyUser, async (req, res) => {
  try {
    const { projectId, quantity = 1 } = req.body;
    const userId = req.userId;

    console.log("🛒 Add to cart request", { userId, projectId, quantity });

    const project = await Project.findById(projectId);
    if (!project) return res.status(404).json({ message: "Project not found" });

    let cartItem = await Cart.findOne({ user: userId, project: projectId });
    if (cartItem) {
      cartItem.quantity += Number(quantity);
      await cartItem.save();
      console.log("🟢 Cart updated", cartItem);
    } else {
      cartItem = await Cart.create({ user: userId, project: projectId, quantity });
      console.log("🆕 Cart item created", cartItem);
    }

    res.status(201).json(cartItem);
  } catch (error) {
    console.error("Add to cart error:", error);
    res.status(500).json({ message: error.message });
  }
});

// Get current user's cart
router.get("/", verifyUser, async (req, res) => {
  try {
    const userId = req.userId;
    const items = await Cart.find({ user: userId })
      .populate("project", "name pricePerCredit image impactScore category")
      .sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    console.error("Fetch cart error:", error);
    res.status(500).json({ message: error.message });
  }
});

// Remove item from cart
router.delete("/:cartItemId", verifyUser, async (req, res) => {
  try {
    const { cartItemId } = req.params;
    const userId = req.userId;
    const deleted = await Cart.findOneAndDelete({ _id: cartItemId, user: userId });
    if (!deleted) return res.status(404).json({ message: "Cart item not found" });
    res.json({ message: "Removed from cart" });
  } catch (error) {
    console.error("Remove cart error:", error);
    res.status(500).json({ message: error.message });
  }
});

// Clear entire cart for user
router.delete("/", verifyUser, async (req, res) => {
  try {
    const userId = req.userId;
    await Cart.deleteMany({ user: userId });
    res.json({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error("Clear cart error:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
