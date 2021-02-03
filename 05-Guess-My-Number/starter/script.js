'use strict';

// console.log(document.querySelector('.message').textContent);

// 71. What's the DOM and DOM Manipulation
/*
  Document Object Model: Structured representation of HTML documents that allows JS to access HTML elements and styles to manilpulate them
*/

// 72. Selecting and Manipulating Elements

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

// 73. Handling Click Events

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
});
