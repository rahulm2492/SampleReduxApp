class VideosApi {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }



  static getAllCats() {
    // const headers = this.requestHeaders();
  return new Promise((resolve ,reject) => {

    function _settleStream(stream) {
   if (stream.status < 300) return Promise.resolve(stream);
      return Promise.reject(new Error(stream.statusText));
    }

    function _parseRsp(rsp) {
    console.log(rsp);
      return rsp.json();
    }

    function _rspSuccess(data) {
      resolve(data);
    }

    function _rspError(reason) {
      console.log(reason);
    }


    fetch('https://youtubeapp-fb07a.firebaseio.com/items.json')
    .then(_settleStream)
    .then(_parseRsp)
    .then(_rspSuccess)
    .catch(_rspError)
    })
  }


}
export default VideosApi;
