import * as actions from '../actions';

export default function Explore(
  state = {
    loading: false,
    ids: {},
    error: false
  },
  action
) {
  switch (action.type) {
    case actions.EXPLORE_QUIZZES: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case actions.EXPLORE_QUIZZES_OK: {
      const newIds = {};
      action.quizzes.forEach(
        (quiz, i) => (newIds[action.offset + i] = quiz.id)
      );

      return {
        ...state,
        loading: false,
        ids: { ...state.ids, ...newIds },
        error: false
      };
    }
    case actions.EXPLORE_QUIZZES_ERROR: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    default: {
      return state;
    }
  }
}
