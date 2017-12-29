import { NavDrawerActions } from '../actions';

export default function NavDrawer(
  state = {
    open: false
  },
  action
) {
  switch (action.type) {
    case NavDrawerActions.OPEN: {
      return {
        ...state,
        open: true
      };
    }
    case NavDrawerActions.CLOSE: {
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
