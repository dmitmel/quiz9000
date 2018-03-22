/* eslint-disable no-plusplus */

import * as actions from '../actions/types';

export default function Explore(
  state = {
    state: 'success',
    ids: {}
  },
  action
) {
  switch (action.type) {
    case actions.FETCH_QUIZZES: {
      const newIds = {};

      for (let i = 0; i < action.limit; i++) {
        newIds[action.offset + i] =
          action.status === 'success' ? action.quizzes[i].id : undefined;
      }

      return {
        ...state,
        status: action.status,
        ids: { ...state.ids, ...newIds }
      };
    }

    default: {
      return state;
    }
  }
}
