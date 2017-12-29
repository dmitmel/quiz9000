export const OPEN_NAV = '@@NavDrawer/OPEN';
export const CLOSE_NAV = '@@NavDrawer/CLOSE';

export function openNav() {
  return { type: OPEN_NAV };
}

export function closeNav() {
  return { type: CLOSE_NAV };
}
