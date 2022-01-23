import * as actions from '../actions/types';

export default function Library(state = {}, action) {
  switch (action.type) {
    case actions.ADD_QUIZ: {
      return [...state, action.id];
    }
    case actions.REMOVE_QUIZ: {
      const index = state.indexOf(action.id);
      if (index < 0) return state;
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    default: {
      return state;
    }
  }
}
