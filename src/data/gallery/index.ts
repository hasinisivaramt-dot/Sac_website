import { aziznagarGallery } from "./aziznagarGallery";
import { bachupallyGallery } from "./bachupallyGallery";
import { gbsGallery } from "./gbsGallery";
import type { GalleryItem } from "./aziznagarGallery";

export * from "./aziznagarGallery";
export * from "./bachupallyGallery";
export * from "./gbsGallery";

export const galleryByCampusId = {
  campus01: aziznagarGallery,
  campus02: bachupallyGallery,
  campus03: gbsGallery,
};

export const galleryByCampusSlug = {
  aziznagar: aziznagarGallery,
  bachupally: bachupallyGallery,
  gbs: gbsGallery,
};
