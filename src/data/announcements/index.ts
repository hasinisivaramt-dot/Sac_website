import { aziznagarAnnouncements } from "./aziznagarAnnouncements";
import { bachupallyAnnouncements } from "./bachupallyAnnouncements";
import { gbsAnnouncements } from "./gbsAnnouncements";
import type { AnnouncementItem } from "./aziznagarAnnouncements";

export * from "./aziznagarAnnouncements";
export * from "./bachupallyAnnouncements";
export * from "./gbsAnnouncements";

export const announcementsByCampusId = {
  campus01: aziznagarAnnouncements,
  campus02: bachupallyAnnouncements,
  campus03: gbsAnnouncements,
};

export const announcementsByCampusSlug = {
  aziznagar: aziznagarAnnouncements,
  bachupally: bachupallyAnnouncements,
  gbs: gbsAnnouncements,
};
