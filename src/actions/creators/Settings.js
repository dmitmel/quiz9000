import { OPEN_SETTINGS, CLOSE_SETTINGS } from '../types';

export function openSettings() {
  return { type: OPEN_SETTINGS };
}

export function closeSettings() {
  return { type: CLOSE_SETTINGS };
}
