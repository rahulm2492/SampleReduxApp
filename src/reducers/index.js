import {combineReducers} from 'redux';
import videos from './catReducer';
import hobbies from './hobbyReducer';
import session from './sessionReducer';

const rootReducer = combineReducers({
  // short hand property names
  videos,
  hobbies,
  session
})

export default rootReducer;
