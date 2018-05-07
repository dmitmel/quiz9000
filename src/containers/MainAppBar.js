import { connect } from 'react-redux';
import * as actions from '../actions/creators';
import MainAppBar from '../components/MainAppBar';

export default connect(null, dispatch => ({
  openNav: () => dispatch(actions.openNav()),
}))(MainAppBar);
