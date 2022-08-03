import createItem from './createItem.js';
import cleanElement from './cleanElement.js';
import getShows from './getShows.js';

const showListItem = async () => {
  cleanElement('#items_container');
  const itemsContainer = document.querySelector('#items_container');
  const shows = await getShows();
  shows.forEach((show) => {
    // console.log(show.image.medium);
    itemsContainer.appendChild(createItem(show));
  });
};

export default showListItem;