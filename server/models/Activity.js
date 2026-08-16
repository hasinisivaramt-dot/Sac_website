/**
 * Activity Data Model Schema
 */
class Activity {
  constructor({ id, campusId, title, category, frequency, participants, description, badge }) {
    this.id = id;
    this.campusId = campusId; // "campus01" | "campus02" | "campus03"
    this.title = title;
    this.category = category;
    this.frequency = frequency;
    this.participants = participants;
    this.description = description;
    this.badge = badge;
  }
}

module.exports = Activity;
