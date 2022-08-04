export default class GetShow {
  constructor(url = 'https://api.tvmaze.com/') {
    this.baseUrl = url;
  }

getRequestOptions=(queryParams) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  return fetch(this.baseUrl + queryParams, requestOptions)
    .then((response) => response.json())
    .catch((error) => error);
};

postRequestWithOptions = function (id, username, message) {
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

  return fetch(this.baseUrl, requestOptions)
    .then((response) => response.text())
    .catch((error) => error);
};
}
