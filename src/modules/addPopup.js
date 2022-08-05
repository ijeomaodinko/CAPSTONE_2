import GetShow from "./getShow.js";

// const btn = document.querySelector('.btn_comment');

class commentsPage {
  URL =
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tC8kuxLLK9p84n1K7Qba/comments";

  // To create template to render the items in the modal
  static renderMovies(show) {
  
    //Create modal content
    const html = `
  <div class="sectionModal">
  <p class="close">&times</p>
  <article class="movies">
  <img class="moviesImg" src="${show.image.medium}" />
  <div class="movieData">
      <h3 class="moviesName">${show.name}</h3>
      <div class="item1"> </div>
       <p class="moviesRow"><span></span>${show.summary}</p>
  </div>
  </article>
  
  <div class=commentContainer>
  <p> Comments (<span class="commentCounter">p</span>)</p>
  <div class=commentBox> </div>
  </div>
  
  <div class="writeComments">
  <p class="writeComment">Write Comment</p>
  <input type="text"  placeholder="Username" class="inputName"></input>
  <input type="textarea" placeholder="Comment" class="inputComment"></input>
  <button type="button" class="btn btn_primary btn_movies">Comment</button>
  </div> 
  </div>`;

    //Get the dom element to the modal
    const commentsPage = document.querySelector(".commentSection");

    //Add the content
    commentsPage.innerHTML = html;

    //Show the modal
    commentsPage.classList.add("showUp");
    window.onclick = function (event) {
      if (event.target === commentsPage) {
        commentsPage.classList.remove("showUp");
      }
    };

    this.getComments();
  }

  // to retrieve comments from api
  getComments = () => {
    const commentBox = document.querySelector(".commentBox");
    const commentsCounter = document.querySelector(".commentsCounter");
    commentBox.innerHTML = "";

    const response = this.getShows.getRequestOptions(
      `?item_id=${this.show.id}`
    );

    response
      .then((result) => {
        if (result.length) {
          this.commentsArray = result;

          // to retrive item to comment box
          this.commentsArray.forEach((comment) => {
            const html = `
             <p>
              <span class="comments-date" >${comment.creation_date} </span>
              <span class="comments-username"><b>${comment.username}: </b></span>
              <span>${comment.comment} </span>
             </p>
             `;
            commentBox.innerHTML += `${html}`;
          });
        }
        commentsCounter.innerHTML = `Comments: ${this.calculateCount()}`;
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  static sendComment = (id) => {
    const userId = document.querySelector(".inputName");
    const commentUsers = document.querySelector("inputComment");

    if (userId.value && commentUsers.value) {
      this.getShows
        .postRequestWithOptions(id, userId.value, commentUsers.value)
        .then(() => {
          userId.value = "";

          commentUsers.value = "";

          this.getComments();
        });
    }
  };

  // to add counter to comment
  calculateCount = () => this.commentsArray.length;
}

const commentPopupEvent = () => {
  const allCommentButtons = document.querySelectorAll(".btn");

  allCommentButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const commentModal1 = document.querySelector(".btn");
      commentModal1.renderMovies(this.show);

      const addComment = document.querySelector(".btn_movies");
      addComment.addEventListener("click", () => {
        const commentModal1 = document.querySelector("btn_movies");
        commentModal1.sendComment();
      });
    });
  });
  setTimeout(commentPopupEvent, 15);
};

commentPopupEvent();

export default commentsPage;
