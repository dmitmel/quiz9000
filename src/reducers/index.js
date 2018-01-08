import { combineReducers } from 'redux';
import Explore from './Explore';
import Library from './Library';
import NavDrawer from './NavDrawer';
import Settings from './Settings';
import quizzes from './quizzes';

const rootReducer = combineReducers({
  Explore,
  Library,
  NavDrawer,
  Settings,
  quizzes
});

export default rootReducer;
