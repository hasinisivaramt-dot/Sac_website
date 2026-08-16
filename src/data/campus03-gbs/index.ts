import { gbsCampus } from "../campuses/gbs";
import { gbsClubs } from "../clubs/gbsClubs";
import { gbsEvents } from "../events/gbsEvents";
import { gbsAnnouncements } from "../announcements/gbsAnnouncements";
import { gbsGallery } from "../gallery/gbsGallery";

export const campus03Gbs = {
  ...gbsCampus,
  hero: gbsCampus.hero,
  principal: gbsCampus.principal,
  about: gbsCampus.about,
  statistics: gbsCampus.stats,
  clubs: gbsClubs,
  events: gbsEvents,
  announcements: gbsAnnouncements,
  gallery: gbsGallery,
  contact: {
    location: gbsCampus.location,
    address: gbsCampus.address,
    email: gbsCampus.email,
    phone: gbsCampus.phone,
  },
};
