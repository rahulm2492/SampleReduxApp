import * as types from './actionTypes';
import catApi from '../api/VideosApi';

export function loadCatsSuccess(videos) {
  return {type: types.LOAD_VIDEO_SUCCESS, videos};
}


export function loadCats() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return catApi.getAllCats().then(videos => {
      dispatch(loadCatsSuccess(videos));
    }).catch(error => {
      throw(error);
    });
  };
}
