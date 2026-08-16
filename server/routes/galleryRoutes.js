const express = require("express");
const router = express.Router();
const galleryController = require("../controllers/galleryController");

router.get("/campus/:campusId", galleryController.getGalleryByCampus);

module.exports = router;
