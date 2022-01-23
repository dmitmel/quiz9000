import { connect } from 'react-redux';
import Library from '../components/Library';
import { filter as filterObject } from '../utils/object';

export default connect(state => ({
  quizzes: filterObject(state.Library, (id, data) => data != null).map(id => {
    const data = state.Library[id];
    return { ...data, id };
  }),
}))(Library);
