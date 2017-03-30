class VideosApi {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getAllCats() {
    // const headers = this.requestHeaders();
    const request = new Request('video.json', {
      method: 'GET'
    });

    return fetch(request).then(response => {
      return response.text();
    }).catch(error => {
      return error;
    });
  }


}
export default VideosApi;
