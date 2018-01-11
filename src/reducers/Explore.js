import * as actions from '../actions';

export default function Explore(
  state = {
    loading: false,
    ids: [],
    error: false
  },
  action
) {
  switch (action.type) {
    case actions.EXPLORE_MORE_QUIZZES: {
      return {
        ...state,
        ids: action.refresh ? [] : state.ids,
        loading: true,
        error: false
      };
    }
    case actions.EXPLORE_MORE_QUIZZES_OK: {
      const newIds = action.quizzes.map(({ id }) => id);
      return {
        ...state,
        loading: false,
        ids: action.refresh ? newIds : [...state.ids, ...newIds],
        error: false
      };
    }
    case actions.EXPLORE_MORE_QUIZZES_ERROR: {
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
