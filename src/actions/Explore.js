import * as quizzesDB from '../db/quizzes';

export const EXPLORE_MORE_QUIZZES = '@@Explore/EXPLORE_MORE_QUIZZES';
export const EXPLORE_MORE_QUIZZES_OK = '@@Explore/EXPLORE_MORE_QUIZZES_OK';
export const EXPLORE_MORE_QUIZZES_ERROR =
  '@@Explore/EXPLORE_MORE_QUIZZES_ERROR';

function createExploreAction(refresh, count) {
  return (dispatch, getState) => {
    const { ids } = getState().Explore;

    dispatch({ type: EXPLORE_MORE_QUIZZES, refresh });
    const offset = refresh ? 0 : ids.length;
    const limit = refresh ? ids.length : count;
    return quizzesDB.fetchQuizzes(offset, limit).then(
      quizzes => {
        dispatch({ type: EXPLORE_MORE_QUIZZES_OK, refresh, quizzes });
        return quizzes;
      },
      () => {
        dispatch({ type: EXPLORE_MORE_QUIZZES_ERROR });
      }
    );
  };
}

export function exploreMoreQuizzes(count) {
  return createExploreAction(false, count);
}

export function refreshExploredQuizzes() {
  return createExploreAction(true);
}
