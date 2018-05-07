import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import withHandlers from 'recompose/withHandlers';
import lifecycle from 'recompose/lifecycle';
import FetchStatus from '../utils/FetchStatus';
import * as actions from '../actions/creators';
import QuizDetails from '../components/QuizDetails';

export default compose(
  connect(
    (state, { id }) => ({
      quizzes: state.fetchedQuizzes,
      isSaved: Boolean(state.Library[id]),
    }),
    dispatch => ({
      fetchQuiz: id => dispatch(actions.fetchQuiz(id)),
      onSave: data => dispatch(actions.addQuiz(data)),
      onRemove: id => dispatch(actions.removeQuiz(id)),
    }),
  ),
  withProps(({ quizzes, id }) => {
    const { status, data } = quizzes[id] || {};
    return { loading: status === FetchStatus.LOADING, data };
  }),
  withHandlers({
    fetchQuiz: ({ loading, data, fetchQuiz }) => id => {
      if (!data && !loading) fetchQuiz(id);
    },
    onRefresh: ({ id, loading, fetchQuiz }) => () => {
      if (!loading) fetchQuiz(id);
    },
    onSave: ({ loading, data, onSave }) => () => {
      if (!loading) onSave(data);
    },
    onRemove: ({ id, loading, onRemove }) => () => {
      if (!loading) onRemove(id);
    },
  }),
  lifecycle({
    componentDidMount() {
      const { id, fetchQuiz } = this.props;
      fetchQuiz(id);
    },
    componentWillReceiveProps({ id, fetchQuiz }) {
      fetchQuiz(id);
    },
  }),
)(QuizDetails);
