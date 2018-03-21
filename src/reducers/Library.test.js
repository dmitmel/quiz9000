import reducer from './Library';
import * as actions from '../actions/types';

describe('reducers/Library', () => {
  it('initializes empty state', () => {
    // given:
    const action = { type: 'INIT' };
    // when:
    const nextState = reducer(undefined, action);
    // then:
    expect(nextState).toEqual({ savedQuizzes: [] });
  });

  describe('+ SAVE_QUIZ', () => {
    it('adds quiz to the list', () => {
      // given:
      const state = { savedQuizzes: [0, 1] };
      const action = { type: actions.SAVE_QUIZ, id: 2 };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({ savedQuizzes: [0, 1, 2] });
    });

    it('does not do anything if quiz is already in the list', () => {
      // given:
      const state = { savedQuizzes: [0, 1, 2] };
      const action = { type: actions.SAVE_QUIZ, id: 2 };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({ savedQuizzes: [0, 1, 2] });
    });
  });

  describe('+ REMOVE_QUIZ', () => {
    it('removes quiz from the list', () => {
      // given:
      const state = { savedQuizzes: [0, 1, 2] };
      const action = { type: actions.REMOVE_QUIZ, id: 2 };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({ savedQuizzes: [0, 1] });
    });

    it('does not do anything if quiz is not in the list', () => {
      // given:
      const state = { savedQuizzes: [0, 1] };
      const action = { type: actions.REMOVE_QUIZ, id: 2 };
      // when:
      const nextState = reducer(state, action);
      // then:
      expect(nextState).toEqual({ savedQuizzes: [0, 1] });
    });
  });
});
