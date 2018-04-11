import reducer from './NavDrawer';
import * as actions from '../actions/types';

describe('reducers/NavDrawer', () => {
  const initialState = { open: false };

  it('initializes empty state', () => {
    // given:
    const action = { type: 'INIT' };
    // when:
    const nextState = reducer(undefined, action);
    // then:
    expect(nextState).toEqual(initialState);
  });

  it('ignores invalid actions', () => {
    // given:
    const action = { type: 'TOTALLY_USELESS_ACTION' };
    // when:
    const nextState = reducer(undefined, action);
    // then:
    expect(nextState).toEqual(initialState);
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

    it('does not do anything if the nav is opened', () => {
      // given:
      const state = { open: true };
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

    it('does not do anything if the nav is closed', () => {
      // given:
      const state = { open: false };
      const action = { type: actions.CLOSE_NAV };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({ open: false });
    });
  });
});
