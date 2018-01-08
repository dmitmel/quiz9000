import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import withHandlers from 'recompose/withHandlers';
import lifecycle from 'recompose/lifecycle';
import * as actions from '../actions';
import QuizDetails from '../components/QuizDetails';

export default compose(
  connect(
    ({ quizzes }) => ({ quizzes }),
    dispatch => ({ fetchQuiz: id => dispatch(actions.fetchQuiz(id)) })
  ),
  withHandlers({
    getQuiz: ({ quizzes }) => id =>
      quizzes[id] || { loading: false, data: null }
  }),
  withHandlers({
    fetchQuiz: ({ getQuiz, fetchQuiz }) => id => {
      const { data, loading } = getQuiz(id);
      if (!data && !loading) fetchQuiz(id);
    },
    onRefresh: ({ id, getQuiz, fetchQuiz }) => () => {
      const { loading } = getQuiz(id);
      if (!loading) fetchQuiz(id);
    }
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
  withProps(({ getQuiz, id }) => getQuiz(id))
)(QuizDetails);
