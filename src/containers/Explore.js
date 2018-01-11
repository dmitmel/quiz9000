import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import lifecycle from 'recompose/lifecycle';
import * as actions from '../actions';
import Explore from '../components/Explore';

const quizzesPerPage = 10;

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
    fetchMore: ({ quizzes, fetchQuizzes }) => () =>
      fetchQuizzes(quizzes.length, quizzesPerPage),
    onRefresh: ({ quizzes, fetchQuizzes }) => () =>
      fetchQuizzes(0, quizzes.length)
  }),
  lifecycle({
    componentDidMount() {
      const { fetchMore } = this.props;
      fetchMore(quizzesPerPage);
    }
  })
)(Explore);
