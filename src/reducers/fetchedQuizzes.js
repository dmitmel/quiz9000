import * as actions from '../actions/types';

export default function fetchedQuizzes(state = {}, action) {
  switch (action.type) {
    case actions.FETCH_QUIZ: {
      return {
        ...state,
        [action.id]: {
          loading: action.status === 'loading',
          data: action.status === 'success' ? action.quiz : null,
          error: action.status === 'error'
        }
      };
    }
    case actions.FETCH_QUIZZES_OK: {
      const newQuizzes = {};
      action.quizzes.forEach(quiz => {
        newQuizzes[quiz.id] = {
          loading: false,
          data: quiz,
          error: false
        };
      });
      return { ...state, ...newQuizzes };
    }
    default: {
      return state;
    }
  }
}
