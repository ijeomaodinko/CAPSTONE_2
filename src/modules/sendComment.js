import postRequestWithOptions from './postRequestWithOptions.js';
import getShows from '../modules/getShows.js';

 const sendComment = funtion (){
    const userId = document.querySelector('.input_name');
    const commentUsers = document.querySelector('input_comment');

    if (userId.value && commentUsers.value) {
      this.getShows.postRequestWithOptions(this.show.id, userId.value, commentUsers.value)
        .then(() => {
          userId.value = '';

          commentUsers.value = '';

          this.getComments();
        });
    }
  };
