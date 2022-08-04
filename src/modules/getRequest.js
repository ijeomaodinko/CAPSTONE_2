//the baseurl will be in the getShows js

import getShows from getShows

getRequestOptions(queryParams) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    return fetch(this.baseUrl + queryParams, requestOptions)
      .then((response) => response.json())
      .catch((error) => error);
  };
 

  export default getRequestOptions 