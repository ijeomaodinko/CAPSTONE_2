import './style.css';
//import showListItem from './modules/showListItem.js';
import getShows from './modules/getShows.js';

window.addEventListener('load', async()=>{
  const shows = await getShows();
  console.log('Request'+shows);
});
