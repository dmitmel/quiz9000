import * as quizzesDB from '../db/quizzes';

export const FETCH_QUIZZES = '@@Explore/FETCH_QUIZZES';
export const FETCH_QUIZZES_OK = '@@Explore/FETCH_QUIZZES_OK';
export const FETCH_QUIZZES_ERROR = '@@Explore/FETCH_QUIZZES_ERROR';

export function fetchQuizzes(offset, limit) {
  return dispatch => {
    dispatch({ type: FETCH_QUIZZES, offset, limit });
    return quizzesDB.fetchQuizzes(offset, limit).then(
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
