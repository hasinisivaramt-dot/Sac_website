import { azizNagarCampus } from "./aziz-nagar";
import { bachupallyCampus } from "./bachupally";
import { gbsCampus } from "./gbs";
import type { CampusData, CampusId } from "@/types";

export * from "./aziz-nagar";
export * from "./bachupally";
export * from "./gbs";

export const allCampusesList = [azizNagarCampus, bachupallyCampus, gbsCampus];

export const campuses: Record<string, CampusData> = {
  "aziz-nagar": azizNagarCampus,
  "bachupally": bachupallyCampus,
  gbs: gbsCampus,
  aziznagar: azizNagarCampus,
};

export const campusesById = campuses;
export const campusesBySlug = campuses;
export const DEFAULT_CAMPUS: CampusId = "aziz-nagar";
