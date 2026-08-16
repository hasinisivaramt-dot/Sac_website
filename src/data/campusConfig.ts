import { azizNagarCampus } from "./campuses/aziz-nagar";
import { bachupallyCampus } from "./campuses/bachupally";
import { gbsCampus } from "./campuses/gbs";
import type { CampusData, CampusId } from "./types";

export const campuses: Record<string, CampusData> = {
  "aziz-nagar": azizNagarCampus,
  "bachupally": bachupallyCampus,
  gbs: gbsCampus,
  aziznagar: azizNagarCampus,
};

export type { CampusId, CampusData };

export const DEFAULT_CAMPUS: CampusId = "aziz-nagar";

export const campusList: { id: CampusId; name: string; order: number }[] = [
  { id: "aziz-nagar", name: "Aziz Nagar", order: 1 },
  { id: "bachupally", name: "Bachupally", order: 2 },
  { id: "gbs", name: "GBS", order: 3 },
];
