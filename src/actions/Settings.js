export const OPEN_SETTINGS = '@@Settings/OPEN';
export const CLOSE_SETTINGS = '@@Settings/CLOSE';

export function openSettings() {
  return { type: OPEN_SETTINGS };
}

export function closeSettings() {
  return { type: CLOSE_SETTINGS };
}
