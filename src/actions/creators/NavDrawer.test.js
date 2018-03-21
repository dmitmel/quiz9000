import { openNav, closeNav } from './NavDrawer';
import { OPEN_NAV, CLOSE_NAV } from '../types';

describe('actions/creators/NavDrawer', () => {
  describe('+ openNav()', () => {
    it('returns a valid action', () => {
      // when:
      const action = openNav();
      // then:
      expect(action).toEqual({ type: OPEN_NAV });
    });
  });

  describe('+ closeNav()', () => {
    it('returns a valid action', () => {
      // when:
      const action = closeNav();
      // then:
      expect(action).toEqual({ type: CLOSE_NAV });
    });
  });
});
