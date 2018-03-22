import * as actions from '../actions/types';

export default function fetchedQuizzes(state = {}, action) {
  switch (action.type) {
    case actions.FETCH_QUIZ: {
      return {
        ...state,
        [action.id]: {
          status: action.status,
          data: action.status === 'success' ? action.quiz : null
        }
      };
    }
    case actions.FETCH_QUIZZES_OK: {
      const newQuizzes = {};
      action.quizzes.forEach(quiz => {
        newQuizzes[quiz.id] = {
          status: 'success',
          data: quiz
        };
      });
      return { ...state, ...newQuizzes };
    }
    default: {
      return state;
    }
  }
}
