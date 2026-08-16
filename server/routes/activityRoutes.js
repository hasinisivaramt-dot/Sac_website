const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activityController");

router.get("/campus/:campusId", activityController.getActivitiesByCampus);

module.exports = router;
