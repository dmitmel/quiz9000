import reducer from './Explore';
import * as actions from '../actions/types';
import FetchStatus from '../utils/FetchStatus';

describe('reducers/Explore', () => {
  const initialState = {
    status: FetchStatus.SUCCESS,
    ids: {},
  };

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

  describe('+ FETCH_QUIZZES', () => {
    it('sets status to the action status', () => {
      // given:
      const state = {
        status: FetchStatus.SUCCESS,
        ids: {},
      };
      const status = 'myCustomStatus';
      const action = { type: actions.FETCH_QUIZZES, status };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({ ...state, status });
    });

    describe('> when the action status is not successful', () => {
      it('deletes selected IDs if the action status', () => {
        // given:
        const state = {
          status: 'myCustomStatus',
          ids: { 0: 'a', 1: 'b', 2: 'c', 3: 'd' },
        };
        const action = {
          type: actions.FETCH_QUIZZES,
          status: 'myCustomStatus',
          offset: 1,
          limit: 2,
        };
        // when:
        const nextState = reducer(state, action);
        // then:
        expect(nextState).toEqual({
          ...state,
          ids: { 0: 'a', 3: 'd' },
        });
      });
    });

    describe('> when the action status is successful', () => {
      it('adds IDs of the fetched quizzes', () => {
        // given:
        const state = {
          status: FetchStatus.SUCCESS,
          ids: { 0: 'a', 1: 'some', 2: 'thing', 3: 'd' },
        };
        const action = {
          type: actions.FETCH_QUIZZES,
          status: FetchStatus.SUCCESS,
          offset: 1,
          limit: 2,
          quizzes: [{ id: 'b' }, { id: 'c' }],
        };
        // when:
        const nextState = reducer(state, action);
        // then:
        expect(nextState).toEqual({
          ...state,
          ids: { 0: 'a', 1: 'b', 2: 'c', 3: 'd' },
        });
      });
    });
  });
});
