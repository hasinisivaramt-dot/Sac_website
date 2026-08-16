/**
 * Gallery Image Data Model Schema
 */
class Gallery {
  constructor({ id, campusId, title, category, image, date, description = "" }) {
    this.id = id;
    this.campusId = campusId; // "campus01" | "campus02" | "campus03"
    this.title = title;
    this.category = category;
    this.image = image;
    this.date = date;
    this.description = description;
  }
}

module.exports = Gallery;
