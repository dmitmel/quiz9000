import * as actions from '../actions';

export default function Settings(state = {}, action) {
  switch (action.type) {
    case actions.FETCH_QUIZ: {
      return {
        ...state,
        [action.id]: {
          loading: true,
          data: null,
          error: false
        }
      };
    }
    case actions.FETCH_QUIZ_OK: {
      return {
        ...state,
        [action.id]: {
          loading: false,
          data: action.quiz,
          error: false
        }
      };
    }
    case actions.FETCH_QUIZ_ERROR: {
      return {
        ...state,
        [action.id]: {
          loading: false,
          data: null,
          error: true
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
