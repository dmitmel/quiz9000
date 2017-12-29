import { quizzes as quizzesDB } from '../db';

export const FETCH_QUIZ = '@@QuizDetails/FETCH_QUIZ';
export const FETCH_QUIZ_OK = '@@QuizDetails/FETCH_QUIZ_OK';
export const FETCH_QUIZ_ERROR = '@@QuizDetails/FETCH_QUIZ_ERROR';

export function fetchQuiz(id) {
  return dispatch => {
    dispatch({ type: FETCH_QUIZ, id });
    quizzesDB
      .findQuizBy('id', id)
      .then(
        quiz => dispatch({ type: FETCH_QUIZ_OK, id, data: quiz }),
        () => dispatch({ type: FETCH_QUIZ_ERROR, id })
      );
  };
}
