import { addQuiz, removeQuiz } from './Library';
import { ADD_QUIZ, REMOVE_QUIZ } from '../types';

describe('actions/creators/Library', () => {
  describe('+ addQuiz()', () => {
    it('returns a valid action', () => {
      // given:
      const id = 0;
      const data = { foo: 'bar' };
      // when:
      const action = addQuiz(id, data);
      // then:
      expect(action).toEqual({ type: ADD_QUIZ, id, data });
    });
  });

  describe('+ removeQuiz()', () => {
    it('returns a valid action', () => {
      // given:
      const id = 0;
      // when:
      const action = removeQuiz(id);
      // then:
      expect(action).toEqual({ type: REMOVE_QUIZ, id });
    });
  });
});
