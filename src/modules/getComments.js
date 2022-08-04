import getShows from '../modules/getShows';
import getRequestOptions from './getRequest.js';

// to retrieve comments from api
  getComments() {
      const commentBox = document.querySelector('.commentBox');
      const commentsCounter = document.querySelector('.commentsCounter');
      commentBox.innerHTML = '';

      const response = this.getShows.getRequestOptions(`?item_id=${this.show.id}`);

      response.then((result) => {
        if (result.length) {
          this.commentsArray = result;
     
         //to retrive item to comment box 
          this.commentsArray.forEach((comment) => {
            const html = `
             <p>
              <span class="comments-date" >${comment.comment.creation_date} </span>
              <span class="comments-username"><b>${comment.username}: </b></span>
              <span>${comment.comment} </span>
             </p>
             `;
            commentBox.innerHTML += `${html}`;
          });
        }
        commentsCounter.innerHTML = `Comments: ${this.calculateCount()}`;
      }).catch((error) => {
        throw new Error(error);
      });
      
      //to add counter to comment 
      calculateCount () => {
         return this.comments_array.length;
       }
      
    }

    export default getComments