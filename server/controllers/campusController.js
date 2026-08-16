const campusService = require("../services/campusService");

exports.getAllCampuses = async (req, res, next) => {
  try {
    const campuses = await campusService.getCampuses();
    res.json({ success: true, count: campuses.length, data: campuses });
  } catch (error) {
    next(error);
  }
};

exports.getCampusById = async (req, res, next) => {
  try {
    const { campusId } = req.params;
    const campus = await campusService.getCampusById(campusId);
    if (!campus) {
      return res.status(404).json({ success: false, message: `Campus ${campusId} not found.` });
    }
    res.json({ success: true, data: campus });
  } catch (error) {
    next(error);
  }
};
