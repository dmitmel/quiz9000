import * as quizzesDB from '../db/quizzes';

export const EXPLORE_QUIZZES = '@@Explore/EXPLORE_QUIZZES';
export const EXPLORE_QUIZZES_OK = '@@Explore/EXPLORE_QUIZZES_OK';
export const EXPLORE_QUIZZES_ERROR = '@@Explore/EXPLORE_QUIZZES_ERROR';

export function exploreQuizzes(offset, limit) {
  return dispatch => {
    dispatch({ type: EXPLORE_QUIZZES });
    return quizzesDB.fetchQuizzes(offset, limit).then(
      quizzes => {
        dispatch({ type: EXPLORE_QUIZZES_OK, offset, quizzes });
        return quizzes;
      },
      () => {
        dispatch({ type: EXPLORE_QUIZZES_ERROR });
      }
    );
  };
}
