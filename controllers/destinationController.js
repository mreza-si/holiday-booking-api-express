const Destination = require("../models/Destination");

// ایجاد مقصد

exports.createDestination = async (req, res, next) => {
  try {
    const newDestination = await Destination.create(req.body);
    res.status(201).json(newDestination);
  } catch (err) {
    next(err);
  }
};

// دریافت همه مقصدها (با فیلتر اختیاری)

exports.getDestinations = async (req, res, next) => {
  try {
    const query = {};

    if (req.query.location) query.location = req.query.location;
    if (req.query.price) query.price = { $lte: Number(req.query.price) };
    if (req.query.rating) query.rating = { $gte: Number(req.query.rating) };

    const destinations = await Destination.find(query);
    res.json(destinations);
  } catch (err) {
    next(err);
  }
};

// دریافت یک مقصد خاص

exports.getDestinationById = async (req, res, next) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) return res.status(404).json({ error: "Destination Not found" });
    res.json(destination);
  } catch (err) {
    next(err);
  }
};

// ویرایش مقصد

exports.updateDestination = async (req, res, next) => {
  try {
    const destination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!destination) return res.status(404).json({ error: "Not found" });
    res.json(destination);
  } catch (err) {
    next(err);
  }
};

// حذف مقصد

exports.deleteDestination = async (req, res, next) => {
  try {
    const result = await Destination.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Destination deleted Successfully" });
  } catch (err) {
    next(err);
  }
};
