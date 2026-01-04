const express = require("express");
const router = express.Router();

const CarbonOrder = require("../models/Order");
const Project = require("../models/Project");
const models = require("../models/schema");


// 1️⃣ CREATE ORDER (Buy Carbon Credits)
router.post("/", async (req, res) => {
  try {
    const { userId, projectId, creditsPurchased } = req.body;

    // Find project
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Check availability
    if (project.availableCredits < creditsPurchased) {
      return res
        .status(400)
        .json({ message: "Not enough credits available" });
    }

    // Calculate total amount
    const totalAmount = creditsPurchased * project.pricePerCredit;

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

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// 2️⃣ GET ALL ORDERS OF A USER
router.get("/my-orders/:userId", async (req, res) => {
  try {
    const orders = await CarbonOrder.find({ user: req.params.userId })
      .populate("project", "name category pricePerCredit");

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// 3️⃣ UPDATE ORDER STATUS (Digital Tracking)
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
