const activityService = require("../services/activityService");

exports.getActivitiesByCampus = async (req, res, next) => {
  try {
    const { campusId } = req.params;
    const activities = await activityService.getActivitiesByCampus(campusId);
    res.json({ success: true, count: activities.length, data: activities });
  } catch (error) {
    next(error);
  }
};
