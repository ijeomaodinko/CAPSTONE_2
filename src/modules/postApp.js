// Async function to post a new game in the API
const postNewGame = async () => {
  const appId = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      /* https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tC8kuxLLK9p84n1K7Qba/
      }), */
      method: 'POST',
    },
  )
    .then((response) => {
      if (response.ok) return response.json();
      return Promise.reject(response);
    })
    .then((data) => data.result);
  return appId;
};

export default postNewGame;
