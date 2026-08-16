const clubService = require("../services/clubService");

exports.getClubsByCampus = async (req, res, next) => {
  try {
    const { campusId } = req.params;
    const clubs = await clubService.getClubsByCampus(campusId);
    res.json({ success: true, count: clubs.length, data: clubs });
  } catch (error) {
    next(error);
  }
};

exports.getClubById = async (req, res, next) => {
  try {
    const { clubId } = req.params;
    const club = await clubService.getClubById(clubId);
    if (!club) {
      return res.status(404).json({ success: false, message: "Club not found" });
    }
    res.json({ success: true, data: club });
  } catch (error) {
    next(error);
  }
};
