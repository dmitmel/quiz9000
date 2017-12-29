import { connect } from 'react-redux';
import * as actions from '../actions';
import Settings from '../components/Settings';

export default connect(
  store => ({ open: store.Settings.open }),
  dispatch => ({ onClose: () => dispatch(actions.closeSettings()) })
)(Settings);
