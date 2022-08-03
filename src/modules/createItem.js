// Import icon
// import heart from '../heart.png';

// Function to create a div with show information
const createItem = (show) => {
  // Create elements
  const divShow = document.createElement('div');
  const divImg = document.createElement('div');
  const imgShow = document.createElement('img');
  const divShowInfo = document.createElement('div');
  const h3ShowTitle = document.createElement('h3');
  const btnLike = document.createElement('button');
  const divLikes = document.createElement('div');
  const divButtons = document.createElement('div');
  const btnDetails = document.createElement('button');
  const btnComments = document.createElement('button');

  // Add content and atributes
  divShow.classList.add('show');

  divImg.classList.add('image_show');
  imgShow.src = show.image.medium;
  divImg.appendChild(imgShow);

  divShowInfo.classList.add('info_show');
  h3ShowTitle.classList.add('title_show');
  h3ShowTitle.textContent = show.name;
  btnLike.classList.add('btn_like');
  divShowInfo.appendChild(h3ShowTitle);
  divShowInfo.appendChild(btnLike);

  divLikes.classList.add('likes_show');
  divLikes.textContent = '5 likes';

  divButtons.classList.add('options_show');
  btnDetails.textContent = 'See more';
  btnDetails.classList.add('btn_details');
  btnComments.textContent = 'Comments';
  btnComments.classList.add('btn_comments');
  divButtons.appendChild(btnDetails);
  divButtons.appendChild(btnComments);

  /// ADD EVENTS LISTENERS

  // Add child
  divShow.appendChild(divImg);
  divShow.appendChild(divShowInfo);
  divShow.appendChild(divLikes);
  divShow.appendChild(divButtons);

  return divShow;
};

export default createItem;