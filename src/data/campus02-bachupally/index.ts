import { bachupallyCampus } from "../campuses/bachupally";
import { bachupallyClubs } from "../clubs/bachupallyClubs";
import { bachupallyEvents } from "../events/bachupallyEvents";
import { bachupallyAnnouncements } from "../announcements/bachupallyAnnouncements";
import { bachupallyGallery } from "../gallery/bachupallyGallery";

export const campus02Bachupally = {
  ...bachupallyCampus,
  hero: bachupallyCampus.hero,
  principal: bachupallyCampus.principal,
  about: bachupallyCampus.about,
  statistics: bachupallyCampus.stats,
  clubs: bachupallyClubs,
  events: bachupallyEvents,
  announcements: bachupallyAnnouncements,
  gallery: bachupallyGallery,
  contact: {
    location: bachupallyCampus.location,
    address: bachupallyCampus.address,
    email: bachupallyCampus.email,
    phone: bachupallyCampus.phone,
  },
};
