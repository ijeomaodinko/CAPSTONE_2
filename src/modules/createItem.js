// Import icon
import like from "../like.png";
import postLike from "./postLike.js";
import renderModal from "./addPopup.js";
import cleanElement from "./cleanElement";

// Function to create a div with show information
const createItem = (show, likes) => {
  // Create elements
  const divShow = document.createElement("div");
  const divImg = document.createElement("div");
  const imgShow = document.createElement("img");
  const divShowTitle = document.createElement("div");
  const h3ShowTitle = document.createElement("h3");
  const divLikes = document.createElement("div");
  const numLikes = document.createElement("span");
  const imgLike = document.createElement("img");
  const divButtons = document.createElement("div");
  const btnReserve = document.createElement("button");
  const btnComments = document.createElement("button");

  // Add content and atributes
  divShow.classList.add("show");

  // Show image
  divImg.classList.add("image_show");
  imgShow.src = show.image.medium;
  divImg.appendChild(imgShow);

  // Show title
  divShowTitle.classList.add("info_show");
  h3ShowTitle.classList.add("title_show");
  h3ShowTitle.textContent = show.name;
  divShowTitle.appendChild(h3ShowTitle);

  // Show likes
  divLikes.classList.add("likes_show");
  numLikes.classList.add("num_likes");
  const likesItem = likes.find((element) => element.item_id === show.id).likes;
  numLikes.textContent = likesItem;
  imgLike.classList.add("img_like");
  imgLike.src = like;
  divLikes.appendChild(numLikes);
  divLikes.appendChild(imgLike);

  // Show buttons
  divButtons.classList.add("buttons_show");
  btnComments.textContent = "Comments";
  btnComments.classList.add("btn_show");
  btnReserve.textContent = "Reserve";
  btnReserve.classList.add("btn_show");
  divButtons.appendChild(btnComments);
  divButtons.appendChild(btnReserve);

  /// ADD EVENTS LISTENERS

  //Add new likes
  imgLike.addEventListener("click", async () => {
    postLike(show.id);
    const likes = parseInt(numLikes.textContent, 10) + 1;
    numLikes.textContent = likes;
  });

  //Show modal
  btnComments.addEventListener("click", () => {
    cleanElement('.modal');
    renderModal(show.id);
  });

  // Add child
  divShow.appendChild(divImg);
  divShow.appendChild(divShowTitle);
  divShow.appendChild(divLikes);
  divShow.appendChild(divButtons);

  return divShow;
};

export default createItem;
