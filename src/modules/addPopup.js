import getComments from "./getComments.js";
import cancel from "../cancel.png";
import getShowById from "./getShowById.js";
import postComment from "./postComment.js";

// To create template to render the items in the modal
const renderModal = async (id) => {
  //Get show
  const show = await getShowById(id);

  //Create modal content

  // Create elements
  const divShowModal = document.querySelector(".modal");

  const divImgModal = document.createElement("div");
  const imgClose = document.createElement("img");
  const imgShowModal = document.createElement("img");

  const divShowInfo = document.createElement("div");
  const h3ShowTitle = document.createElement("h3");
  const pSummary = document.createElement("p");


  const divComments = document.createElement("div");
  const numComments = document.createElement("span");
  const ulComments = document.createElement("ul");

  const divAddComment = document.createElement("div");
  const inpName = document.createElement("input");
  const inpComment = document.createElement("input");
  const btnComment = document.createElement("button");

  // Add content and atributes
  divShowModal.classList.add("modal");

  imgShowModal.src = show.image.medium;
  imgClose.classList.add("closeModal");

  // Show image
  divImgModal.classList.add("imageModal");
  imgClose.src = cancel;
  divImgModal.appendChild(imgShowModal);

  // Show details
  divShowInfo.classList.add("detailsShow");
  h3ShowTitle.classList.add("title_show");
  h3ShowTitle.innerText = show.name;
  pSummary.classList.add("sumShow");
  pSummary.innerText = show.summary;
  divShowInfo.appendChild(h3ShowTitle);
  divShowInfo.appendChild(pSummary);

  // Show comments
  divComments.classList.add("comments_show");
  numComments.classList.add("num_likes");
  const comments = await getComments(id);
  if (comments.length > 0) {
    numComments.innerText = `Comments (${comments.length})`;
    ulComments.classList.add("commentsList");
    comments.forEach((e) => {
      const liComment = document.createElement("li");
      liComment.innerText = `${e.creation_date} ${e.username}: ${e.comment}`;
      ulComments.appendChild(liComment);
    });
  } else {
    numComments.innerText = "Comments (0)";
  }
  divComments.appendChild(numComments);
  divComments.appendChild(ulComments);

  // Add comments
  divAddComment.classList.add("writeComments");
  inpName.classList.add("inputName");
  inpName.placeholder = "Username";
  inpName.type = "text";
  inpComment.classList.add("inputComment");
  inpComment.placeholder = "Comment";
  inpName.type = "textarea";
  btnComment.classList.add("btn_show");
  btnComment.type = "button";
  btnComment.textContent = "Comment";
  divAddComment.appendChild(inpName);
  divAddComment.appendChild(inpComment);
  divAddComment.appendChild(btnComment);

  divShowModal.appendChild(imgClose);
  divShowModal.appendChild(divImgModal);
  divShowModal.appendChild(divShowInfo);
  divShowModal.appendChild(divComments);
  divShowModal.appendChild(divAddComment);

  /// ADD EVENTS LISTENERS

  imgClose.addEventListener("click", () => {
    commentsPage.classList.remove("showUp");
  });

  //Get the dom element to the modal
  const commentsPage = document.querySelector(".commentSection");
  //Add the content
  commentsPage.appendChild(divShowModal);
  //Show the modal
  commentsPage.classList.add("showUp");
  window.onclick = function (event) {
    if (event.target === commentsPage) {
      commentsPage.classList.remove("showUp");
    }
  };

  btnComment.addEventListener("click", async () => {
    const name = document.querySelector(".inputName").value;
    const comment = document.querySelector(".inputComment").value;
    if (name !== "" && comment !== "") {
      await postComment(id,name,comment);
    }
  });
};

export default renderModal;
