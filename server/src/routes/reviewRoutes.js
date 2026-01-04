const express = require("express");
const router = express.Router();

const Review = require("../models/Review");
const Project = require("../models/Project");
const verifyUser = require("../middleware/verifyUser");


// 1️⃣ ADD REVIEW FOR A PROJECT (auth required)
router.post("/", verifyUser, async (req, res) => {
  try {
    const { projectId, rating, comment } = req.body;
    const userId = req.userId;

    if (!projectId || rating === undefined) {
      return res.status(400).json({ message: "projectId and rating are required" });
    }

    const numericRating = Number(rating);
    if (Number.isNaN(numericRating) || numericRating < 1 || numericRating > 10) {
      return res.status(400).json({ message: "Rating must be between 1 and 10" });
    }

    // Check if project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Create review
    const review = new Review({
      user: userId,
      project: projectId,
      rating: numericRating,
      comment,
    });

    await review.save();

    // Update review count in project
    project.reviewsCount += 1;

    // OPTIONAL: update impact score (simple avg logic)
    const allReviews = await Review.find({ project: projectId });
    const avgRating =
      allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;

    project.impactScore = avgRating.toFixed(1);
    await project.save();

    const populated = await review.populate("user", "username email");
    res.status(201).json(populated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// 2️⃣ GET ALL REVIEWS FOR A PROJECT
router.get("/:projectId", async (req, res) => {
  try {
    const reviews = await Review.find({
      project: req.params.projectId,
    }).populate("user", "username email");

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
