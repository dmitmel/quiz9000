import { combineReducers } from 'redux';
import auth from './auth';
import Explore from './Explore';
import Library from './Library';
import NavDrawer from './NavDrawer';
import Settings from './Settings';
import fetchedQuizzes from './fetchedQuizzes';

const rootReducer = combineReducers({
  auth,
  Explore,
  Library,
  NavDrawer,
  Settings,
  fetchedQuizzes,
});

export default rootReducer;
