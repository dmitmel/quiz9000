import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Explore from '../components/Explore';

export default connect(
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
)(({ loading, quizzes, fetchQuizzes }) => (
  <Explore
    loading={loading}
    quizzes={quizzes}
    fetchMore={count => fetchQuizzes(quizzes.length, count)}
    onRefresh={() => fetchQuizzes(0, quizzes.length)}
  />
));
