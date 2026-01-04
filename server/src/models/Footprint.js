const mongoose = require("mongoose");

const footprintSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    travelKm: Number,
    electricityUnits: Number,
    flightsPerMonth: Number,

    estimatedCredits: Number, // AI output
  },
  { timestamps: true }
);

module.exports = mongoose.model("Footprint", footprintSchema);
