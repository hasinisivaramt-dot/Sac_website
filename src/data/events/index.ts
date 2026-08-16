import { aziznagarEvents } from "./aziznagarEvents";
import { bachupallyEvents } from "./bachupallyEvents";
import { gbsEvents } from "./gbsEvents";
import type { EventItem } from "./aziznagarEvents";

export * from "./aziznagarEvents";
export * from "./bachupallyEvents";
export * from "./gbsEvents";

export const eventsByCampusId = {
  campus01: aziznagarEvents,
  campus02: bachupallyEvents,
  campus03: gbsEvents,
};

export const eventsByCampusSlug = {
  aziznagar: aziznagarEvents,
  bachupally: bachupallyEvents,
  gbs: gbsEvents,
};
