const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: String,
    price: Number,
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Destination", destinationSchema);
