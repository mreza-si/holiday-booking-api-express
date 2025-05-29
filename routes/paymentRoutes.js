const express = require("express");
const router = express.Router();
const authMidddleware = require("../middlewares/authMidddleware");
const paymentController = require("../controllers/paymentController");

router.post("/checkout", authMidddleware, paymentController.simulatePayment);

module.exports = router;
