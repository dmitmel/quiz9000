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
        quizzes: Object.keys(ids)
          .filter(i => ids[i] != null)
          .map(i => {
            const id = ids[i];
            const quiz = state.fetchedQuizzes[id];
            return quiz.data;
          })
      };
    },
    dispatch => ({
      fetchQuizzes: (limit, offset) =>
        dispatch(actions.fetchQuizzes(limit, offset))
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
      const { quizzes, fetchMore } = this.props;
      if (!quizzes.length) fetchMore();
    }
  })
)(Explore);
