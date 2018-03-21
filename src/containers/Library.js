import { connect } from 'react-redux';
import * as actions from '../actions/creators';
import Library from '../components/Library';

export default connect(null, dispatch => ({
  addQuiz: quiz => dispatch(actions.addQuiz(quiz))
}))(Library);
