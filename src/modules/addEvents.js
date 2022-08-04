import renderMovies from '../module/add_pop_up.js'
import sendComment from '../module/sendComment.js'

const start = 1;

const end = 10;

shows.fetchRange(start, end);

const commentPopupEvent = () => {
    if (shows.moviesArray.length === end - start) {
      const allCommentButtons = document.querySelectorAll('.btn');
  
      allCommentButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const commentModal1 = document.querySelector('.sectionModal');
          commentPopup.renderMovies();
  
          const addComment = document.querySelector('.btn_movies');
          addComment.addEventListener('click', () => {
            const commentModal2 = document.querySelector('.commentContainer');
            commentModal2.sendComment();
          });
        });
      });
    } else {
        setTimeout(commentPopupEvent, 15);
      }
    };
    
    commentPopupEvent();