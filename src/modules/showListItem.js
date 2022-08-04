import createItem from './createItem.js';
import cleanElement from './cleanElement.js';
import getShows from './getShows.js';
import getLikes from './getLikes.js';
import itemsCounter from './itemsCounter.js';

const showListItem = async () => {
  cleanElement('#items_container');
  const itemsContainer = document.querySelector('#items_container');
  // Get show from TVMaze API
  const shows = await getShows();
  // Get likes form Involved API
  const likes = await getLikes();
  shows.forEach((show) => {
    itemsContainer.appendChild(createItem(show, likes));
  });
  // Show number of items
  const linkShows = document.querySelector('#link_shows');
  linkShows.textContent = `Shows ${itemsCounter()}`;
};

export default showListItem;
