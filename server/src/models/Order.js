const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },

    creditsPurchased: { type: Number, required: true },

    totalAmount: { type: Number, required: true },

    status: {
      type: String,
      enum: ["Purchased", "Owned", "Offset Used"],
      default: "Purchased",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CarbonOrder", orderSchema);
