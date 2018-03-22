import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import withHandlers from 'recompose/withHandlers';
import lifecycle from 'recompose/lifecycle';
import * as actions from '../actions/creators';
import QuizDetails from '../components/QuizDetails';

export default compose(
  connect(
    (state, { id }) => ({
      quizzes: state.fetchedQuizzes,
      isSaved: state.Library.savedQuizzes.indexOf(id) >= 0
    }),
    dispatch => ({
      fetchQuiz: id => dispatch(actions.fetchQuiz(id)),
      onSave: id => dispatch(actions.saveQuiz(id)),
      onRemove: id => dispatch(actions.removeQuiz(id))
    })
  ),
  withHandlers({
    getQuiz: ({ quizzes }) => id => quizzes[id] || {}
  }),
  withHandlers({
    fetchQuiz: ({ getQuiz, fetchQuiz }) => id => {
      const { status, data } = getQuiz(id);
      if (!data && status !== 'loading') fetchQuiz(id);
    },
    onRefresh: ({ id, getQuiz, fetchQuiz }) => () => {
      const { status } = getQuiz(id);
      if (status !== 'loading') fetchQuiz(id);
    },
    onSave: ({ id, onSave }) => () => onSave(id),
    onRemove: ({ id, onRemove }) => () => onRemove(id)
  }),
  lifecycle({
    componentDidMount() {
      const { id, fetchQuiz } = this.props;
      fetchQuiz(id);
    },
    componentWillReceiveProps({ id, fetchQuiz }) {
      fetchQuiz(id);
    }
  }),
  withProps(({ getQuiz, id }) => {
    const { status, data } = getQuiz(id);
    return { loading: status === 'loading', data };
  })
)(QuizDetails);
