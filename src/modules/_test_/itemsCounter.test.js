/**
 * @jest-environment jsdom
 */

import itemsCounter from '../itemsCounter.js';

describe('Counter the number of shows in the home page', () => {
  test('Count shows 6', () => {
    document.body.innerHTML = `
     <div class='show'></div>
     <div class='show'></div>
     <div class='show'></div>
     <div class='show'></div>
     <div class='show'></div>
     <div class='show'></div>
     `;
    const shows = itemsCounter();
    expect(shows).toBe(6);
  });

  test('Count shows 0', () => {
    document.body.innerHTML = `
     `;
    const shows = itemsCounter();
    expect(shows).toBe(0);
  });

  test('Count shows 3', () => {
    document.body.innerHTML = `
     <div class='show'></div>
     <div class='show'></div>
     <div class='show'></div>
     `;
    const shows = itemsCounter();
    expect(shows).toBe(3);
  });

  test('Count shows 1', () => {
    document.body.innerHTML = `
     <div class='show'></div>
     `;
    const shows = itemsCounter();
    expect(shows).toBe(1);
  });
});
