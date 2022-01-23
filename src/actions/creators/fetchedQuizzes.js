import { FETCH_QUIZ } from '../types';
import FetchStatus from '../../utils/FetchStatus';
import { fetchQuiz as dbFetchQuiz } from '../../firebase/quizzes';

export function fetchQuiz(id) {
  return dispatch => {
    dispatch({ type: FETCH_QUIZ, status: FetchStatus.LOADING, id });
    return dbFetchQuiz(id).then(
      data => {
        dispatch({ type: FETCH_QUIZ, status: FetchStatus.SUCCESS, id, data });
        return data;
      },
      () => {
        dispatch({ type: FETCH_QUIZ, status: FetchStatus.ERROR, id });
      },
    );
  };
}
