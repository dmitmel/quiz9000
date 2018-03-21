import { connect } from 'react-redux';
import * as actions from '../actions/creators';
import Settings from '../components/Settings';

export default connect(
  state => ({ open: state.Settings.open }),
  dispatch => ({ onClose: () => dispatch(actions.closeSettings()) })
)(Settings);
