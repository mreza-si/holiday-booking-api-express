const Booking = require("../models/Booking");

exports.simulatePayment = async (req, res, next) => {
  try {
    const { bookingId } = req.body;

    // پیدا کردن رزرو
    const booking = await Booking.findOne({ _id: bookingId, user: req.userId }).populate("destination");

    if (!booking) {
      return res.status(404).json({ error: "Booking not found " });
    }

    const pricePerPerson = booking.destination.price;
    const numberOfPeople = booking.numberOfPeople;
    const totalAmount = pricePerPerson * numberOfPeople;

    // شبیه‌سازی پرداخت موفق
    return res.json({
      status: "Success",
      message: "Payment simulated successfully",
      bookingId: booking._id,
      destination: booking.destination.name,
      totalAmount,
    });
  } catch (err) {
    next(err);
  }
};
