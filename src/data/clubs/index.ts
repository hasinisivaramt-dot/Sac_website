import { aziznagarClubs } from "./aziznagarClubs";
import { bachupallyClubs } from "./bachupallyClubs";
import { gbsClubs } from "./gbsClubs";
import type { ClubItem } from "./aziznagarClubs";

export * from "./aziznagarClubs";
export * from "./bachupallyClubs";
export * from "./gbsClubs";

export const clubsByCampusId = {
  campus01: aziznagarClubs,
  campus02: bachupallyClubs,
  campus03: gbsClubs,
};

export const clubsByCampusSlug = {
  aziznagar: aziznagarClubs,
  bachupally: bachupallyClubs,
  gbs: gbsClubs,
};
