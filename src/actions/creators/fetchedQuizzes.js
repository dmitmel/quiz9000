import { FETCH_QUIZ } from '../types';
import { findQuizBy } from '../../db/quizzes';

export function fetchQuiz(id) {
  return dispatch => {
    dispatch({ type: FETCH_QUIZ, status: 'loading', id });
    return findQuizBy('id', id).then(
      quiz => {
        dispatch({ type: FETCH_QUIZ, status: 'success', id, quiz });
        return quiz;
      },
      () => {
        dispatch({ type: FETCH_QUIZ, status: 'error', id });
      }
    );
  };
}
