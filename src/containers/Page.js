import { connect } from 'react-redux';
import * as actions from '../actions';
import Page from '../components/Page';

export default connect(null, dispatch => ({
  openNav: () => dispatch(actions.openNav())
}))(Page);
