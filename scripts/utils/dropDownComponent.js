'use strict';

const dropdownBtn = document.querySelector('#btn');
const dropdownMenu = document.querySelector('#dropdown');
const toggleArrow = document.querySelector('#arrow');

const toggleDropdown = () => {
  dropdownMenu.classList.toggle('show');
  toggleArrow.classList.toggle('arrow');
};

document.documentElement.addEventListener('click', () => {
  if (dropdownMenu.classList.contains('show')) {
    toggleDropdown();
  }
});

dropdownBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleDropdown();
});

dropdownBtn.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    toggleDropdown();
  }
});

/**
 * Update dropdown sort type list
 *
 * @param {string} currentSortType - name of the current sort type
 * @param {object} medias - medias informations of photographer
 * @param {object} photographer - photographer informations
 */
// eslint-disable-next-line no-unused-vars
function updateDropDownList(currentSortType, medias, photographer) {
  dropdownMenu.textContent = '';

  if (currentSortType !== 'popularity') {
    const popularityLiElement = document.createElement('li');
    const borderTopDivElement = document.createElement('div');
    const popularityAElement = document.createElement('a');

    borderTopDivElement.className = 'border-top';

    popularityAElement.className = 'sort-element';
    popularityAElement.id = 'popularity';
    popularityAElement.textContent = 'Popularité';

    popularityLiElement.addEventListener('click', () => {
      // eslint-disable-next-line no-undef
      updateGallery(medias, photographer, 'popularity', 'Popularité');
    });

    popularityLiElement.setAttribute('tabindex', '0');

    popularityLiElement.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        // eslint-disable-next-line no-undef
        updateGallery(medias, photographer, 'popularity', 'Popularité');
        toggleDropdown();
      }
    });

    popularityLiElement.appendChild(borderTopDivElement);
    popularityLiElement.appendChild(popularityAElement);
    dropdownMenu.appendChild(popularityLiElement);
  }
  if (currentSortType !== 'date') {
    const dateLiElement = document.createElement('li');
    const borderTopDivElement = document.createElement('div');
    const dateAElement = document.createElement('a');

    borderTopDivElement.className = 'border-top';

    dateAElement.className = 'sort-element';
    dateAElement.id = 'date';
    dateAElement.textContent = 'Date';

    dateLiElement.addEventListener('click', () => {
      // eslint-disable-next-line no-undef
      updateGallery(medias, photographer, 'date', 'Date');
    });

    dateLiElement.setAttribute('tabindex', '0');

    dateLiElement.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && document.activeElement === dateLiElement) {
        // eslint-disable-next-line no-undef
        updateGallery(medias, photographer, 'date', 'Date');
        toggleDropdown();
      }
    });

    dateLiElement.appendChild(borderTopDivElement);
    dateLiElement.appendChild(dateAElement);
    dropdownMenu.appendChild(dateLiElement);
  }
  if (currentSortType !== 'title') {
    const titleLiElement = document.createElement('li');
    const borderTopDivElement = document.createElement('div');
    const titleAElement = document.createElement('a');

    borderTopDivElement.className = 'border-top';

    titleAElement.className = 'sort-element';
    titleAElement.id = 'title';
    titleAElement.textContent = 'Titre';

    titleLiElement.addEventListener('click', () => {
      // eslint-disable-next-line no-undef
      updateGallery(medias, photographer, 'title', 'Titre');
    });

    titleLiElement.setAttribute('tabindex', '0');

    titleLiElement.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        // eslint-disable-next-line no-undef
        updateGallery(medias, photographer, 'title', 'Titre');
        toggleDropdown();
      }
    });

    titleLiElement.appendChild(borderTopDivElement);
    titleLiElement.appendChild(titleAElement);
    dropdownMenu.appendChild(titleLiElement);
  }
}
