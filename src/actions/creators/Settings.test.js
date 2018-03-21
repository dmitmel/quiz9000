import { openSettings, closeSettings } from './Settings';
import { OPEN_SETTINGS, CLOSE_SETTINGS } from '../types';

describe('actions/creators/Settings', () => {
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
