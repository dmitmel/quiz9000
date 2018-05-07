import * as actions from '../actions/types';

export default function Library(
  state = {
    status: 'loading',
  },
  action,
) {
  switch (action.type) {
    case actions.CHANGE_AUTH_STATE: {
      return {
        ...state,
        status: action.status,
        user: action.user,
      };
    }

    default: {
      return state;
    }
  }
}
