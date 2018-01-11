import { connect } from 'react-redux';
import compose from 'recompose/compose';
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
      fetchMore: () => dispatch(actions.exploreMoreQuizzes(quizzesPerPage)),
      onRefresh: () => dispatch(actions.refreshExploredQuizzes())
    })
  ),
  lifecycle({
    componentDidMount() {
      const { fetchMore } = this.props;
      fetchMore(quizzesPerPage);
    }
  })
)(Explore);
