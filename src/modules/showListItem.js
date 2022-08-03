import createItem from './createItem.js';
import cleanElement from './cleanElement.js';
import getShows from './getShows.js';

const showListItem = async () => {
  cleanElement('#items_container');
  const items_container = document.querySelector('#items_container');
  const shows = await getShows();
  shows.forEach((show) => {
    items_container.appendChild(createItem(show));
  });
};

export default showListItem;