// Async function to get mistery shows
const getShows = async () => {
    const response = await fetch('https://api.tvmaze.com/shows');
    const result = await response.json();
    const horror_shows = [];
    result.forEach(show => {
        if(show.genres.includes('Horror')){
          horror_shows.push(show);
        }
    });
    return horror_shows;
}
    
export default getShows;
