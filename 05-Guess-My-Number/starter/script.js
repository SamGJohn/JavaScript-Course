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

const secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⚠️ No Number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 You Got It!';

    document.querySelector('body').style.backgroundColor = 'green';

    document.querySelector('.number').style.width = '30rem';

    // When Guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '🤦‍♂️ Too High. Guess Again!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 You Lost';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '🤦 Too Low. Guess Again!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 You Lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// this function will only be called when the event happens
//remember that functions are just values
