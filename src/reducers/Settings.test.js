import reducer from './Settings';
import * as actions from '../actions/types';

describe('reducers/Settings', () => {
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

  describe('+ OPEN_SETTINGS', () => {
    it('opens the settings menu if it is closed', () => {
      // given:
      const state = { open: false };
      const action = { type: actions.OPEN_SETTINGS };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({ open: true });
    });

    it('does not do anything if the settings menu is opened', () => {
      // given:
      const state = { open: true };
      const action = { type: actions.OPEN_SETTINGS };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({ open: true });
    });
  });

  describe('+ CLOSE_SETTINGS', () => {
    it('closes the settings menu if it is opened', () => {
      // given:
      const state = { open: true };
      const action = { type: actions.CLOSE_SETTINGS };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({ open: false });
    });

    it('does not do anything if the settings menu is closed', () => {
      // given:
      const state = { open: false };
      const action = { type: actions.CLOSE_SETTINGS };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({ open: false });
    });
  });
});
