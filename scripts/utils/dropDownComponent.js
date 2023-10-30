const dropdownBtn = document.querySelector('#btn');
const dropdownMenu = document.querySelector('#dropdown');
const toggleArrow = document.querySelector('#arrow');

// Toggle dropdown function
const toggleDropdown = function () {
  dropdownMenu.classList.toggle('show');
  toggleArrow.classList.toggle('arrow');
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleDropdown();
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener('click', () => {
  if (dropdownMenu.classList.contains('show')) {
    toggleDropdown();
  }
});

dropdownBtn.addEventListener('keydown', (event) => {
  if (event.key.lenght === 1 && event.key === 'Tab') {
    console.log(document.querySelector('#media-0').firstChild);
    document.querySelector('#media-0').firstChild.focus();
  }
});
