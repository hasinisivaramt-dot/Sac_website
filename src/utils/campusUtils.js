import { campusData, defaultCampus } from '../data/campusData';

export function getCampus(id) {
  return campusData[id] || campusData[defaultCampus];
}

export function isValidCampus(id) {
  return Boolean(campusData[id]);
}
