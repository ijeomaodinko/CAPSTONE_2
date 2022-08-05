import getComments from "./getComments.js";
import cancel from "../cancel.png";
import getShowById from "./getShowById.js";

// To create template to render the items in the modal
const renderModal = async (id) => {
  //Get show
  const show = await getShowById(id);
  console.log(show);
  //Create modal content

  // Create elements
  const divShowModal = document.createElement("div");

  const divImgModal = document.createElement("div");
  const imgClose = document.createElement("img");
  const imgShowModal = document.createElement("img");

  const divShowInfo = document.createElement("div");
  const h3ShowTitle = document.createElement("h3");
  const pSummary = document.createElement('p');
  
  const divComments = document.createElement("div");
  const numComments = document.createElement('span');
  const ulComments = document.createElement("ul");
  
  const divAddComment = document.createElement("div");
  const inpName = document.createElement('input');
  const inpComment = document.createElement('input');
  const btnComment = document.createElement("button");

  // Add content and atributes
  divShowModal.classList.add('modal');

  // Show image
  divImgModal.classList.add("imageModal");
  imgShowModal.src = show.image.medium;
  imgClose.classList.add("closeModal");
  imgClose.src = cancel;
  divImgModal.appendChild(imgClose);
  divImgModal.appendChild(imgShowModal);
 
  // Show details
  divShowInfo.classList.add("detailsShow");
  h3ShowTitle.classList.add("title_show");
  h3ShowTitle.textContent = show.name;
  pSummary.classList.add('sumShow');
  pSummary.textContent = show.summary;
  divShowInfo.appendChild(h3ShowTitle);

  // Show comments
  divComments.classList.add("comments_show");
  numComments.classList.add("num_likes");
  const comments = await getComments(show.id);
  if(comments.lenght > 0){
    numComments.innerText = `Comments (${comments.lenght})`;
    ulComments.classList.add('commentsList');
    array.forEach(element => {
      const liComment = document.createElement('li');
      //liComment.classList('comment');
      liComment.innerText = `${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}`;
      ulComments.appendChild(liComment);
    });
  }else{
    numComments.innerText = 'Comments (0)';
  }
  divComments.appendChild(numComments);
  divComments.appendChild(ulComments);

  // Add comments
  divAddComment.classList.add("writeComments");
  inpName.classList.add('inputName');
  inpName.placeholder = 'Username';
  inpName.type = 'text';
  inpComment.classList.add('inputComment');
  inpComment.placeholder = 'Comment';
  inpName.type = 'textarea';
  btnComment.classList.add('btn_show');
  btnComment.type = 'button';
  btnComment.textContent = "Comment";
  divAddComment.appendChild(inpName);
  divAddComment.appendChild(inpComment);
  divAddComment.appendChild(btnComment);

  divShowModal.appendChild(divImgModal);
  divShowModal.appendChild(divShowInfo);
  divShowModal.appendChild(divComments);
  divShowModal.appendChild(divAddComment);

   /// ADD EVENTS LISTENERS

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
};

export default renderModal;
