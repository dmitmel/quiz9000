import { openNav, OPEN_NAV, closeNav, CLOSE_NAV } from './NavDrawer';

describe('actions/NavDrawer', () => {
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
