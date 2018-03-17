import { addQuiz, ADD_QUIZ } from './quizzes';

describe('actions/quizzes', () => {
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
