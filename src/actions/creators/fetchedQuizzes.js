import { FETCH_QUIZ, FETCH_QUIZ_OK, FETCH_QUIZ_ERROR } from '../types';
import { findQuizBy } from '../../db/quizzes';

export function fetchQuiz(id) {
  return dispatch => {
    dispatch({ type: FETCH_QUIZ, id });
    return findQuizBy('id', id).then(
      quiz => {
        dispatch({ type: FETCH_QUIZ_OK, id, quiz });
        return quiz;
      },
      () => {
        dispatch({ type: FETCH_QUIZ_ERROR, id });
      }
    );
  };
}
