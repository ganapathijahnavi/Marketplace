const express = require("express");
const router = express.Router();

const CarbonOrder = require("../models/Order");
const Project = require("../models/Project");
const models = require("../models/schema");
const verifyUser = require("../middleware/verifyUser");


// 1️⃣ CREATE ORDER (Buy Carbon Credits)
router.post("/", verifyUser, async (req, res) => {
  try {
    const { projectId, creditsPurchased } = req.body;
    const userId = req.userId; // Get userId from JWT token

    console.log("📦 Creating order for user:", userId);
    console.log("📋 Request body:", req.body);

    if (!projectId || !creditsPurchased) {
      console.error("❌ Missing required fields:", { projectId, creditsPurchased });
      return res.status(400).json({ message: "Missing projectId or creditsPurchased" });
    }

    // Find project
    const project = await Project.findById(projectId);
    if (!project) {
      console.error("❌ Project not found:", projectId);
      return res.status(404).json({ message: "Project not found" });
    }

    console.log("✅ Found project:", project.name);

    // Check availability
    if (project.availableCredits < creditsPurchased) {
      console.error("❌ Not enough credits. Available:", project.availableCredits, "Requested:", creditsPurchased);
      return res
        .status(400)
        .json({ message: "Not enough credits available" });
    }

    // Calculate total amount
    const totalAmount = creditsPurchased * project.pricePerCredit;

    console.log("💰 Total amount:", totalAmount);

    // Create order
    const order = new CarbonOrder({
      user: userId,
      project: projectId,
      creditsPurchased,
      totalAmount,
      status: "Purchased",
    });

    await order.save();

    // Update project credits
    project.availableCredits -= creditsPurchased;
    await project.save();

    // Update user's owned credits (optional but good)
    await models.Users.findByIdAndUpdate(userId, {
      $inc: { carbonCreditsOwned: creditsPurchased },
    });

    console.log("✅ Order created successfully:", order._id);
    res.status(201).json(order);
  } catch (error) {
    console.error("❌ Order creation error:", error);
    console.error("Error stack:", error.stack);
    res.status(500).json({ message: error.message, error: error.toString() });
  }
});


// 2️⃣ GET ALL ORDERS OF A USER (uses JWT)
router.get("/my-orders", verifyUser, async (req, res) => {
  try {
    const userId = req.userId;

    const orders = await CarbonOrder.find({ user: userId })
      .populate("project", "name category pricePerCredit image")
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    console.error("Fetch orders error:", error);
    res.status(500).json({ message: error.message });
  }
});


// 3️⃣ GET ALL ORDERS (Admin only)
router.get("/", verifyUser, async (req, res) => {
  try {
    if (req.userRole !== "admin") {
      return res.status(403).json({ message: "Admin access only" });
    }

    const orders = await CarbonOrder.find()
      .populate("project", "name category pricePerCredit image")
      .populate("user", "email username firstname lastname")
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    console.error("Fetch all orders error:", error);
    res.status(500).json({ message: error.message });
  }
});


// 4️⃣ UPDATE ORDER STATUS (Digital Tracking)
router.put("/:orderId/status", async (req, res) => {
  try {
    const { status } = req.body;

    const order = await CarbonOrder.findById(req.params.orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status; // Purchased → Owned → Offset Used
    await order.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
