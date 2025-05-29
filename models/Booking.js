const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    destination: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Destination",
      required: true,
    },
    bookingDate: {
      type: Date,
      default: Date.now,
    },
    travelDate: {
      type: Date,
      required: true,
    },
    numberOfPeople: {
      type: Number,
      required: true,
      min: 1,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
