const express = require("express");
const router = express.Router();
const Footprint = require("../models/Footprint");

// Calculate carbon footprint (mock AI logic for hackathon)
router.post("/calculate", async (req, res) => {
  const { travelKm, electricityUnits, flightsPerMonth } = req.body;

  // Simple formula (can say "AI-assisted" in presentation)
  const estimatedCredits =
    travelKm * 0.01 + electricityUnits * 0.02 + flightsPerMonth * 2;

  const footprint = new Footprint({
    travelKm,
    electricityUnits,
    flightsPerMonth,
    estimatedCredits,
  });

  await footprint.save();
  res.json({ estimatedCredits });
});

module.exports = router;
