import { FETCH_QUIZZES, FETCH_QUIZZES_OK, FETCH_QUIZZES_ERROR } from '../types';
import { fetchQuizzes as dbFetchQuizzes } from '../../db/quizzes';

export function fetchQuizzes(offset, limit) {
  return dispatch => {
    dispatch({ type: FETCH_QUIZZES, offset, limit });
    return dbFetchQuizzes(offset, limit).then(
      quizzes => {
        dispatch({ type: FETCH_QUIZZES_OK, offset, limit, quizzes });
        return quizzes;
      },
      () => {
        dispatch({ type: FETCH_QUIZZES_ERROR, offset, limit });
      }
    );
  };
}
