import reducer from './NavDrawer';
import * as actions from '../actions/NavDrawer';

describe('reducers/NavDrawer', () => {
  it('initializes empty state', () => {
    // given:
    const action = { type: 'INIT' };
    // when:
    const nextState = reducer(undefined, action);
    // then:
    expect(nextState).toEqual({ open: false });
  });

  describe('+ OPEN_NAV', () => {
    it('opens the nav if it is closed', () => {
      // given:
      const state = { open: false };
      const action = { type: actions.OPEN_NAV };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({ open: true });
    });
  });

  describe('+ CLOSE_NAV', () => {
    it('closes the nav if it is opened', () => {
      // given:
      const state = { open: true };
      const action = { type: actions.CLOSE_NAV };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({ open: false });
    });
  });
});
