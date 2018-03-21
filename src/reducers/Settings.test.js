import reducer from './Settings';
import * as actions from '../actions/types';

describe('reducers/Settings', () => {
  it('initializes empty state', () => {
    // given:
    const action = { type: 'INIT' };
    // when:
    const nextState = reducer(undefined, action);
    // then:
    expect(nextState).toEqual({ open: false });
  });

  describe('+ OPEN_SETTINGS', () => {
    it('opens the nav if it is closed', () => {
      // given:
      const state = { open: false };
      const action = { type: actions.OPEN_SETTINGS };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({ open: true });
    });
  });

  describe('+ CLOSE_SETTINGS', () => {
    it('closes the nav if it is opened', () => {
      // given:
      const state = { open: true };
      const action = { type: actions.CLOSE_SETTINGS };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({ open: false });
    });
  });
});
