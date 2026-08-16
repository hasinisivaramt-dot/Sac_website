import { campusInfo } from "./campusInfo";
import { heroData } from "./heroData";
import { principalData } from "./principalData";
import { aboutData } from "./aboutData";
import { statisticsData } from "./statisticsData";
import { clubsData } from "./clubsData";
import { eventsData } from "./eventsData";
import { announcementsData } from "./announcementsData";
import { galleryData } from "./galleryData";
import { contactData } from "./contactData";

export * from "./campusInfo";
export * from "./heroData";
export * from "./principalData";
export * from "./aboutData";
export * from "./statisticsData";
export * from "./clubsData";
export * from "./eventsData";
export * from "./announcementsData";
export * from "./galleryData";
export * from "./contactData";

export const campus01AzizNagar = {
  ...campusInfo,
  hero: heroData,
  principal: principalData,
  about: aboutData,
  statistics: statisticsData,
  clubs: clubsData,
  events: eventsData,
  announcements: announcementsData,
  gallery: galleryData,
  contact: contactData,
};
