import getShows from '../modules/getShows.js';
import getComments from  './getComments.js'

const btn = document.querySelector('.btn_comment');

class CommentsPage {
    URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tC8kuxLLK9p84n1K7Qba/comments';

    constructor(shows, btn) {
      [this.show] = shows.moviesarray.filter((show) => show.id === +btn.id);
      this.getShows = new getShows(this.URL);
      this.commentsArray = [];
    }
//To create template to render the items in the modal

    renderMovies() {
      const html = `
  <section class="sectionModal">
  <p class="close">&times</p>
  <article class="movies">
  <img class="moviesImg" src="${this.show.image.medium}" />
  <div class="movieData">
      <h3 class="moviesName">${this.show.name}</h3>
      <div class="item1"> </div>
       <p class="moviesRow"><span></span>${this.show.summary}</p>
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
  </section>`;

      const commentsPage = document.querySelector('.commentSection');
      const popUp = commentsPage.querySelector('.sectionModal');
      popUp.innerHTML = html;

      this.getComments();
    }
  }

  //to add eventlistner to comment button