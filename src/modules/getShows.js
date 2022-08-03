// Async function to get mistery shows
const getShows = async () => {
    const shows = await fetch(
      `https://api.tvmaze.com/shows`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      },
    )
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then((data) => data.result);
    console.log("Response" + shows);
    return shows;
  };
  
  export default getShows;