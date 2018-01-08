import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import * as actions from '../actions';
import Explore from '../components/Explore';

export default compose(
  connect(
    state => {
      const { loading, ids } = state.Explore;

      return {
        loading,
        quizzes: Object.keys(ids).map(i => {
          const id = ids[i];
          const quiz = state.quizzes[id];
          return quiz.data;
        })
      };
    },
    dispatch => ({
      fetchQuizzes: (offset, limit) =>
        limit > 0
          ? dispatch(actions.exploreQuizzes(offset, limit))
          : Promise.resolve()
    })
  ),
  withHandlers({
    fetchMore: ({ quizzes, fetchQuizzes }) => count =>
      fetchQuizzes(quizzes.length, count),
    onRefresh: ({ quizzes, fetchQuizzes }) => () =>
      fetchQuizzes(0, quizzes.length)
  })
)(Explore);
