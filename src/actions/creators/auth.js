import { CHANGE_AUTH_STATE } from '../types';

export function changeAuthState(status, user) {
  return { type: CHANGE_AUTH_STATE, status, user };
}
