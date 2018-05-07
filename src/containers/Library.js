import { connect } from 'react-redux';
import Library from '../components/Library';

export default connect(state => ({
  quizzes: Object.keys(state.Library)
    .filter(id => state.Library[id])
    .map(id => {
      const data = state.Library[id];
      return { ...data, id };
    }),
}))(Library);
