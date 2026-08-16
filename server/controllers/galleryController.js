// Gallery Controller placeholder
exports.getGalleryByCampus = async (req, res, next) => {
  try {
    const { campusId } = req.params;
    // Returns campus-isolated gallery images
    res.json({ success: true, campusId, data: [] });
  } catch (error) {
    next(error);
  }
};
