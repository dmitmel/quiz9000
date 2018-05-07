import * as actions from '../actions/types';

export default function NavDrawer(
  state = {
    open: false,
  },
  action,
) {
  switch (action.type) {
    case actions.OPEN_NAV: {
      return {
        ...state,
        open: true,
      };
    }
    case actions.CLOSE_NAV: {
      return {
        ...state,
        open: false,
      };
    }
    default: {
      return state;
    }
  }
}
