const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const destinationRoutes = require("./routes/destinationRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/destinations", destinationRoutes);
app.use("/bookings", bookingRoutes);
app.use("/payments", paymentRoutes);

app.use((err, res) => {
  console.error(err.stack);
  res
    .status(err.statusCode || 500)
    .json({ error: err.message || "Something went wrong" });
});

module.exports = app;
