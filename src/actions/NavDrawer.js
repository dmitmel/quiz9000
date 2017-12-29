export const OPEN = '@@NavDrawer/OPEN';
export const CLOSE = '@@NavDrawer/CLOSE';

export function open() {
  return { type: OPEN };
}

export function close() {
  return { type: CLOSE };
}
