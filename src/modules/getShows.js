// Async function to get horror shows
const getShows = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const result = await response.json();
  const horrorShows = [];
  result.forEach((show) => {
    if (show.genres.includes('Horror')) {
      horrorShows.push(show);
    }
  });
  return horrorShows;
};

export default getShows;
