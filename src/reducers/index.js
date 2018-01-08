import { combineReducers } from 'redux';
import Explore from './Explore';
import NavDrawer from './NavDrawer';
import Settings from './Settings';
import quizzes from './quizzes';

const rootReducer = combineReducers({
  Explore,
  NavDrawer,
  Settings,
  quizzes
});

export default rootReducer;
