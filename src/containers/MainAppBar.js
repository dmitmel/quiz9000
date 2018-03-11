import { connect } from 'react-redux';
import * as actions from '../actions';
import MainAppBar from '../components/MainAppBar';

export default connect(null, dispatch => ({
  openNav: () => dispatch(actions.openNav())
}))(MainAppBar);
