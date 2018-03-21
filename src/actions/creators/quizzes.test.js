import { addQuiz } from './quizzes';
import { ADD_QUIZ } from '../types';

describe('actions/creators/quizzes', () => {
  describe('+ addQuiz()', () => {
    it('returns a valid action', () => {
      // given:
      const id = 0;
      const quiz = 'foo';
      // when:
      const action = addQuiz(id, quiz);
      // then:
      expect(action).toEqual({ type: ADD_QUIZ, id, quiz });
    });
  });
});
