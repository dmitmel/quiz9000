import * as actions from '../actions/types';
import FetchStatus from '../utils/FetchStatus';

export default function fetchedQuizzes(state = {}, action) {
  switch (action.type) {
    case actions.FETCH_QUIZ: {
      return {
        ...state,
        [action.id]: {
          status: action.status,
          data: action.status === FetchStatus.SUCCESS ? action.data : undefined,
        },
      };
    }
    case actions.FETCH_QUIZZES: {
      const newQuizzes = {};

      if (action.status === FetchStatus.SUCCESS) {
        Object.keys(action.quizzes).forEach(id => {
          const data = action.quizzes[id];
          newQuizzes[id] = { status: FetchStatus.SUCCESS, data };
        });
      }

      return { ...state, ...newQuizzes };
    }
    default: {
      return state;
    }
  }
}
