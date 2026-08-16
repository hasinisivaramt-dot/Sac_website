const express = require("express");
const router = express.Router();
const campusController = require("../controllers/campusController");

router.get("/", campusController.getAllCampuses);
router.get("/:campusId", campusController.getCampusById);

module.exports = router;
