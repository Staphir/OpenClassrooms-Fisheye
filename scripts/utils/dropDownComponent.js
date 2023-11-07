'use strict';

const dropdownBtn = document.querySelector('#btn');
const dropdownMenu = document.querySelector('#dropdown');
const toggleArrow = document.querySelector('#arrow');

const toggleDropdown = () => {
  dropdownMenu.classList.toggle('show');
  toggleArrow.classList.toggle('arrow');
};

dropdownBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleDropdown();
});

document.documentElement.addEventListener('click', () => {
  if (dropdownMenu.classList.contains('show')) {
    toggleDropdown();
  }
});

dropdownBtn.addEventListener('keydown', (event) => {
  if (event.key.lenght === 1 && event.key === 'Tab') {
    document.querySelector('#media-0').firstChild.focus();
  }
});
