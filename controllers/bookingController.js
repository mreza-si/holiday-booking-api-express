const Booking = require("../models/Booking");
const Destination = require("../models/Destination");

// رزرو مقصد توسط کاربر لاگین‌شده

exports.createBooking = async (req, res, next) => {
  try {
    const { destinationId, travelDate, numberOfPeople } = req.body;

    const destination = await Destination.findById(destinationId);
    if (!destination)
      return res.status(404).json({ error: "Destination not found" });

    const booking = await Booking.create({
      user: req.userId,
      destination: destinationId,
      travelDate,
      numberOfPeople,
    });

    res.status(201).json(booking);
  } catch (err) {
    next(err);
  }
};

// دریافت رزروهای کاربر لاگین‌شده

exports.getMyBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ user: req.userId }).populate(
      "destination",
      "name location price"
    );

    res.json(bookings);
  } catch (err) {
    next(err);
  }
};
