import { renderMovies, sendComment } from './addPopup.js';

const start = 1;

const end = 20;

const commentPopupEvent = () => {
  if (shows.moviesArray.length === end - start) {
    const allCommentButtons = document.querySelectorAll('.btn');

    allCommentButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const commentModal1 = document.querySelector('.btn');
        commentModal1.renderMovies();

        const addComment = document.querySelector('.btn_movies');
        addComment.addEventListener('click', () => {
          const commentModal1 = document.querySelector('btn_movies');
          commentModal1.sendComment();
        });
      });
    });
  } else {
    setTimeout(commentPopupEvent, 15);
  }
};

commentPopupEvent();