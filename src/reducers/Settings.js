import * as actions from '../actions/types';

export default function Settings(
  state = {
    open: false
  },
  action
) {
  switch (action.type) {
    case actions.OPEN_SETTINGS: {
      return {
        ...state,
        open: true
      };
    }
    case actions.CLOSE_SETTINGS: {
      return {
        ...state,
        open: false
      };
    }
    default: {
      return state;
    }
  }
}
