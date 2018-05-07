import { connect } from 'react-redux';
import * as actions from '../actions/creators';
import NavDrawer from '../components/NavDrawer';

export default connect(
  state => ({
    open: state.NavDrawer.open,
    user: state.auth.user,
  }),
  dispatch => ({
    onClose: () => dispatch(actions.closeNav()),
    openSettings: () => dispatch(actions.openSettings()),
  }),
)(NavDrawer);
