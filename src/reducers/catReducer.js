import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';


export default function catReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOAD_VIDEO_SUCCESS:
     return action.videos
    default:
      return state;
  }
}
