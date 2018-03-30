import { connect } from 'react-redux';
import * as actions from '../actions/creators';
import Library from '../components/Library';

export default connect(
  state => ({
    quizzes: Object.keys(state.Library).map(id => {
      const data = state.Library[id];
      return { ...data, id };
    })
  }),
  dispatch => ({
    addQuiz: (id, data) => dispatch(actions.addQuiz(id, data))
  })
)(Library);
