import { connect } from 'react-redux';
import * as actions from '../actions';
import NavDrawer from '../components/NavDrawer';

export default connect(
  state => ({ open: state.NavDrawer.open }),
  dispatch => ({
    onClose: () => dispatch(actions.closeNav()),
    openSettings: () => dispatch(actions.openSettings())
  })
)(NavDrawer);
