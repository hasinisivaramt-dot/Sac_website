import { useState, useEffect, useCallback } from 'react';
import { getCampus, isValidCampus } from '../utils/campusUtils';
import { defaultCampus } from '../data/campusData';

const STORAGE_KEY = 'sac-selected-campus';

export function useCampus() {
  const [campusId, setCampusId] = useState(() => {
    if (typeof window === 'undefined') return defaultCampus;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isValidCampus(stored) ? stored : defaultCampus;
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, campusId);
  }, [campusId]);

  const changeCampus = useCallback((id) => {
    if (isValidCampus(id)) setCampusId(id);
  }, []);

  return { campus: getCampus(campusId), campusId, changeCampus };
}
