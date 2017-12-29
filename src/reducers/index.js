import { combineReducers } from 'redux';
import NavDrawer from './NavDrawer';
import Settings from './Settings';

const rootReducer = combineReducers({
  NavDrawer,
  Settings
});

export default rootReducer;
