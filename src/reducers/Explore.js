/* eslint-disable no-plusplus */

import * as actions from '../actions/types';
import FetchStatus from '../utils/FetchStatus';

export default function Explore(
  state = {
    status: FetchStatus.SUCCESS,
    ids: {},
  },
  action,
) {
  switch (action.type) {
    case actions.FETCH_QUIZZES: {
      const newIds = {};
      const ids = action.quizzes && Object.keys(action.quizzes);

      for (let i = 0; i < action.limit; i++) {
        newIds[action.offset + i] =
          action.status === FetchStatus.SUCCESS ? ids[i] : undefined;
      }

      return {
        ...state,
        status: action.status,
        ids: { ...state.ids, ...newIds },
      };
    }

    default: {
      return state;
    }
  }
}
