import { combineReducers } from 'redux';
import NavDrawer from './NavDrawer';
import Settings from './Settings';
import quizzes from './quizzes';

const rootReducer = combineReducers({
  NavDrawer,
  Settings,
  quizzes
});

export default rootReducer;
