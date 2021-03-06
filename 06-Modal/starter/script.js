'use strict';

//It's EXTREMELY common to add and remove classes to manipulate our web pages bc classes allow us to aggregate multiple css properties in just one on class like a container. By adding and removing we can activate and deactivate certain styles.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden'); //Only use the "." when selecting a class (querySelector)
  overlay.classList.remove('hidden');
};

//If you want to use the same function in multiple event listeners, then write it as a seperate function and pass that function as an argument in the event listener (below).
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// Just like IF ELSE statment we don't need to make a {} block
// Looping over multiple classes
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
// When clicked, call above function ^
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
