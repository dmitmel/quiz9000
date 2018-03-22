import { FETCH_QUIZZES } from '../types';
import { fetchQuizzes as dbFetchQuizzes } from '../../db/quizzes';

export function fetchQuizzes(offset, limit) {
  return dispatch => {
    dispatch({
      type: FETCH_QUIZZES,
      status: 'loading',
      offset,
      limit
    });
    return dbFetchQuizzes(offset, limit).then(
      quizzes => {
        dispatch({
          type: FETCH_QUIZZES,
          status: 'success',
          offset,
          limit,
          quizzes
        });
        return quizzes;
      },
      () => {
        dispatch({
          type: FETCH_QUIZZES,
          status: 'error',
          offset,
          limit
        });
      }
    );
  };
}
