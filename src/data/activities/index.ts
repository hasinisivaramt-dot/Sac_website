import { aziznagarActivities } from "./aziznagarActivities";
import { bachupallyActivities } from "./bachupallyActivities";
import { gbsActivities } from "./gbsActivities";
import type { ActivityItem } from "./aziznagarActivities";

export * from "./aziznagarActivities";
export * from "./bachupallyActivities";
export * from "./gbsActivities";

export const activitiesByCampusId = {
  campus01: aziznagarActivities,
  campus02: bachupallyActivities,
  campus03: gbsActivities,
};

export const activitiesByCampusSlug = {
  aziznagar: aziznagarActivities,
  bachupally: bachupallyActivities,
  gbs: gbsActivities,
};
