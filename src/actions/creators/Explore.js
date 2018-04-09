import { FETCH_QUIZZES } from '../types';
import FetchStatus from '../../utils/FetchStatus';
import { fetchQuizzes as dbFetchQuizzes } from '../../db/quizzes';

export function fetchQuizzes(offset, limit) {
  return dispatch => {
    dispatch({
      type: FETCH_QUIZZES,
      status: FetchStatus.LOADING,
      offset,
      limit
    });
    return dbFetchQuizzes(offset, limit).then(
      quizzes => {
        dispatch({
          type: FETCH_QUIZZES,
          status: FetchStatus.SUCCESS,
          offset,
          limit,
          quizzes
        });
        return quizzes;
      },
      () => {
        dispatch({
          type: FETCH_QUIZZES,
          status: FetchStatus.ERROR,
          offset,
          limit
        });
      }
    );
  };
}
