const express = require("express");
const router = express.Router();
const clubController = require("../controllers/clubController");

router.get("/campus/:campusId", clubController.getClubsByCampus);
router.get("/:clubId", clubController.getClubById);

module.exports = router;
