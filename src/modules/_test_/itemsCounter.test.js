/**
 * @jest-environment jsdom
 */

import itemsCounter from '../itemsCounter.js';

describe('Counter the number of shows in the home page', () => {
  test('Count shows', () => {
    document.body.innerHTML = `<div class="wrapper" id="items_container">
     <div class='show'></div>
     <div class='show'></div>
     <div class='show'></div>
     <div class='show'></div>
     <div class='show'></div>
     <div class='show'></div>
     </div>`;
    const shows = itemsCounter();
    expect(shows).toHaveLength(6);
  });
});
