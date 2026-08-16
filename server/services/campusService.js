const campuses = [
  { id: "campus01", slug: "aziznagar", name: "Aziz Nagar", order: 1 },
  { id: "campus02", slug: "bachupally", name: "Bachupally", order: 2 },
  { id: "campus03", slug: "gbs", name: "GBS", order: 3 },
];

exports.getCampuses = async () => campuses;

exports.getCampusById = async (idOrSlug) => {
  return campuses.find((c) => c.id === idOrSlug || c.slug === idOrSlug) || null;
};
