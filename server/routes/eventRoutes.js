const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

router.get("/campus/:campusId", eventController.getEventsByCampus);
router.get("/:eventId", eventController.getEventById);

module.exports = router;
