const eventService = require("../services/eventService");

exports.getEventsByCampus = async (req, res, next) => {
  try {
    const { campusId } = req.params;
    const events = await eventService.getEventsByCampus(campusId);
    res.json({ success: true, count: events.length, data: events });
  } catch (error) {
    next(error);
  }
};

exports.getEventById = async (req, res, next) => {
  try {
    const { eventId } = req.params;
    const event = await eventService.getEventById(eventId);
    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }
    res.json({ success: true, data: event });
  } catch (error) {
    next(error);
  }
};
