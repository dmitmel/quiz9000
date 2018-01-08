import * as quizzesDB from '../db/quizzes';

export const FETCH_QUIZ = '@@quizzes/FETCH_QUIZ';
export const FETCH_QUIZ_OK = '@@quizzes/FETCH_QUIZ_OK';
export const FETCH_QUIZ_ERROR = '@@quizzes/FETCH_QUIZ_ERROR';

export function fetchQuiz(id) {
  return dispatch => {
    dispatch({ type: FETCH_QUIZ, id });
    return quizzesDB.findQuizBy('id', id).then(
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
