const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    category: {
      type: String,
      required: true,
    },

    pricePerCredit: { type: Number, required: true },

    availableCredits: { type: Number, required: true },

    location: { type: String },

    certification: {
      type: String,
      enum: ["VERRA", "Gold Standard", "None"],
      default: "None",
    },

    sdgGoals: [{ type: String }], // SDG 7, SDG 13 etc.

    description: { type: String },

    image: { type: String },

    impactScore: {
      type: Number, // AI generated
      default: 0,
    },

    reviewsCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);


