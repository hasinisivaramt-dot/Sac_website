import { aziznagarCampus } from "./aziznagar";
import { bachupallyCampus } from "./bachupally";
import { gbsCampus } from "./gbs";

export * from "./aziznagar";
export * from "./bachupally";
export * from "./gbs";

export type CampusInternalId = "campus01" | "campus02" | "campus03";
export type CampusSlug = "aziznagar" | "bachupally" | "gbs";

export const allCampusesList = [aziznagarCampus, bachupallyCampus, gbsCampus];

export const campusesById = {
  campus01: aziznagarCampus,
  campus02: bachupallyCampus,
  campus03: gbsCampus,
};

export const campusesBySlug = {
  aziznagar: aziznagarCampus,
  bachupally: bachupallyCampus,
  gbs: gbsCampus,
};

export const slugToIdMap: Record<CampusSlug, CampusInternalId> = {
  aziznagar: "campus01",
  bachupally: "campus02",
  gbs: "campus03",
};

export const idToSlugMap: Record<CampusInternalId, CampusSlug> = {
  campus01: "aziznagar",
  campus02: "bachupally",
  campus03: "gbs",
};
