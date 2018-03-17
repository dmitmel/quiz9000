import { saveQuiz, SAVE_QUIZ, removeQuiz, REMOVE_QUIZ } from './Library';

describe('actions/Library', () => {
  describe('+ saveQuiz()', () => {
    it('returns a valid action', () => {
      // given:
      const id = 0;
      // when:
      const action = saveQuiz(id);
      // then:
      expect(action).toEqual({ type: SAVE_QUIZ, id });
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
