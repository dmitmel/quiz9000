import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import lifecycle from 'recompose/lifecycle';
import FetchStatus from '../utils/FetchStatus';
import * as actions from '../actions/creators';
import Explore from '../components/Explore';
import { filter as filterObject } from '../utils/object';

const quizzesPerPage = 10;

export default compose(
  connect(
    state => {
      const { status, ids } = state.Explore;
      const indexes = filterObject(ids, (index, id) => id != null);

      return {
        loading: status === FetchStatus.LOADING,
        quizzesCount: indexes.length,
        quizzes: indexes.reduce((quizzes, index) => {
          const id = ids[index];
          const { data } = state.fetchedQuizzes[id];
          quizzes[id] = data;
          return quizzes;
        }, {}),
      };
    },
    dispatch => ({
      fetchQuizzes: (limit, offset) =>
        dispatch(actions.fetchQuizzes(limit, offset)),
    }),
  ),
  withHandlers({
    fetchMore: ({ quizzesCount, fetchQuizzes }) => () =>
      fetchQuizzes(quizzesCount, quizzesPerPage),
    onRefresh: ({ quizzesCount, fetchQuizzes }) => () =>
      fetchQuizzes(0, quizzesCount),
  }),
  lifecycle({
    componentDidMount() {
      const { quizzesCount, fetchMore } = this.props;
      if (!quizzesCount) fetchMore();
    },
  }),
)(Explore);
