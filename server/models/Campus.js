/**
 * Campus Data Model Schema
 * Internal IDs: "campus01" (Aziz Nagar), "campus02" (Bachupally), "campus03" (GBS)
 */
class Campus {
  constructor({ id, slug, name, fullName, tagline, badge, order, location, address, email, phone, stats = [] }) {
    this.id = id; // "campus01" | "campus02" | "campus03"
    this.slug = slug; // "aziznagar" | "bachupally" | "gbs"
    this.name = name;
    this.fullName = fullName;
    this.tagline = tagline;
    this.badge = badge;
    this.order = order;
    this.location = location;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.stats = stats;
  }
}

module.exports = Campus;
