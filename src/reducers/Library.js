import * as actions from '../actions/types';

export default function Library(state = {}, action) {
  switch (action.type) {
    case actions.ADD_QUIZ: {
      return {
        ...state,
        [action.data.id]: action.data,
      };
    }
    case actions.REMOVE_QUIZ: {
      return {
        ...state,
        [action.id]: undefined,
      };
    }
    default: {
      return state;
    }
  }
}
