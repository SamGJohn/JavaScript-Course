'use strict';

// Selecting elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.butn--hold');

//Setting scores to 0. starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceEl.classList.add('hidden'); //adding the hidden class to the dice

let currentScore = 0;

btnRoll.addEventListener('click', function () {
  //1. Need to start by generating a random dice roll (number)
  // create random dice roll. multiply.
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. Add dice role to current score and check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice; // currentScore = currentScore + dice
    current0El.textContent = currentScore; //Need to change later
  } else {
    //Switch to next player
  }
});
