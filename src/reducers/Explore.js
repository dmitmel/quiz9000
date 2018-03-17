/* eslint-disable no-plusplus */

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
    case actions.FETCH_QUIZZES: {
      const newIds = {};
      for (let i = 0; i < action.limit; i++)
        newIds[action.offset + i] = undefined;

      return {
        ...state,
        ids: { ...state.ids, ...newIds },
        loading: true,
        error: false
      };
    }
    case actions.FETCH_QUIZZES_OK: {
      const newIds = {};
      for (let i = 0; i < action.limit; i++)
        newIds[action.offset + i] = action.quizzes[i].id;

      return {
        ...state,
        loading: false,
        ids: { ...state.ids, ...newIds },
        error: false
      };
    }
    case actions.FETCH_QUIZZES_ERROR: {
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
