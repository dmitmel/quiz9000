import {
  openSettings,
  OPEN_SETTINGS,
  closeSettings,
  CLOSE_SETTINGS
} from './Settings';

describe('actions/Settings', () => {
  describe('+ openSettings()', () => {
    it('returns a valid action', () => {
      // when:
      const action = openSettings();
      // then:
      expect(action).toEqual({ type: OPEN_SETTINGS });
    });
  });

  describe('+ closeNav()', () => {
    it('returns a valid action', () => {
      // when:
      const action = closeSettings();
      // then:
      expect(action).toEqual({ type: CLOSE_SETTINGS });
    });
  });
});
