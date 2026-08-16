/**
 * Event Data Model Schema
 */
class Event {
  constructor({ id, campusId, title, category, location, date, time, description, image, registrationOpen = true }) {
    this.id = id;
    this.campusId = campusId; // "campus01" | "campus02" | "campus03"
    this.title = title;
    this.category = category;
    this.location = location;
    this.date = date;
    this.time = time;
    this.description = description;
    this.image = image;
    this.registrationOpen = registrationOpen;
  }
}

module.exports = Event;
