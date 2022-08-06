/**
 * @jest-environment jsdom
 */

import commentsCounter from '../commentsCounter.js';

describe('Counter the number of comments in the modal', () => {
  test('Count comments 1', () => {
    document.body.innerHTML = `
     <li class="itemComment"></li> 
     `;
    const comments = commentsCounter();
    expect(comments).toBe(1);
  });

  test('Count comments 0', () => {
    document.body.innerHTML = `
     `;
    const comments = commentsCounter();
    expect(comments).toBe(0);
  });

  test('Count comments 2', () => {
    document.body.innerHTML = `
     <li class="itemComment"></li> 
     <li class="itemComment"></li> 
     `;
    const comments = commentsCounter();
    expect(comments).toBe(2);
  });

  test('Count comments 10', () => {
    document.body.innerHTML = `
     <li class="itemComment"></li> 
     <li class="itemComment"></li> 
     <li class="itemComment"></li> 
     <li class="itemComment"></li> 
     <li class="itemComment"></li>
     <li class="itemComment"></li> 
     <li class="itemComment"></li> 
     <li class="itemComment"></li> 
     <li class="itemComment"></li> 
     <li class="itemComment"></li>
     `;
    const comments = commentsCounter();
    expect(comments).toBe(10);
  });
});
