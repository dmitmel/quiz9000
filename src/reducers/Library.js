import * as actions from '../actions/types';

export default function Library(
  state = {
    savedQuizzes: []
  },
  action
) {
  switch (action.type) {
    case actions.SAVE_QUIZ: {
      const { savedQuizzes } = state;
      if (savedQuizzes.indexOf(action.id) >= 0) return state;

      return {
        ...state,
        savedQuizzes: [...savedQuizzes, action.id]
      };
    }
    case actions.REMOVE_QUIZ: {
      const { savedQuizzes } = state;
      const index = savedQuizzes.indexOf(action.id);
      if (index < 0) return state;

      return {
        ...state,
        savedQuizzes: savedQuizzes
          .slice(0, index)
          .concat(savedQuizzes.slice(index + 1))
      };
    }
    default: {
      return state;
    }
  }
}
