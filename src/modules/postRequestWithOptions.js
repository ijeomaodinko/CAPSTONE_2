import { baseUrl } from "./getShows";
import getShows from '../modules/getShows';


 const postRequestWithOptions = function(id, username, message) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      item_id: id,
      username,
      comment: message,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    return fetch(baseUrl, requestOptions)
      .then((response) => response.text())
      .catch((error) => error);
  };

  export default postRequestWithOptions;