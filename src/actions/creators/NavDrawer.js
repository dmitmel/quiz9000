import { OPEN_NAV, CLOSE_NAV } from '../types';

export function openNav() {
  return { type: OPEN_NAV };
}

export function closeNav() {
  return { type: CLOSE_NAV };
}
