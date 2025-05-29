const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMidddleware");
const controller = require("../controllers/destinationController");

// فقط افراد لاگین کرده می‌تونن مقصد بسازن، ویرایش یا حذف کنن
router.post("/", authMiddleware, controller.createDestination);
router.put("/:id", authMiddleware, controller.updateDestination);
router.delete("/:id", authMiddleware, controller.deleteDestination);



router.get("/", controller.getDestinations);
router.get("/:id", controller.getDestinationById);

module.exports = router;
