import { FETCH_QUIZ } from '../types';
import FetchStatus from '../../utils/FetchStatus';
import { findQuizBy } from '../../db/quizzes';

export function fetchQuiz(id) {
  return dispatch => {
    dispatch({ type: FETCH_QUIZ, status: FetchStatus.LOADING, id });
    return findQuizBy('id', id).then(
      data => {
        dispatch({ type: FETCH_QUIZ, status: FetchStatus.SUCCESS, id, data });
        return data;
      },
      () => {
        dispatch({ type: FETCH_QUIZ, status: FetchStatus.ERROR, id });
      }
    );
  };
}
