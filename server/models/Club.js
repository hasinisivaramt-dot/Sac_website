/**
 * Club Data Model Schema
 */
class Club {
  constructor({ id, campusId, name, category, icon, image, lead, membersCount = 0, description = "", featuredProject = "" }) {
    this.id = id;
    this.campusId = campusId; // "campus01" | "campus02" | "campus03"
    this.name = name;
    this.category = category;
    this.icon = icon;
    this.image = image;
    this.lead = lead;
    this.membersCount = membersCount;
    this.description = description;
    this.featuredProject = featuredProject;
  }
}

module.exports = Club;
