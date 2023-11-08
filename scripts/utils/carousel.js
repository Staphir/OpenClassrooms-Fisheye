'use strict';

let currentIndex = 0;

/**
 * Open lightbox on clicked media
 *
 * @param {int} mediaId - id of clicked media
 */
// eslint-disable-next-line no-unused-vars
function displayCarousel(mediaId) {
  const divCarousel = document.querySelector('.div-carousel');
  if (divCarousel.ariaHidden === 'true') {
    const main = document.querySelector('main');
    const body = document.querySelector('body');
    if (this) {
      const mediaSelected = this.parentNode;
      // eslint-disable-next-line no-param-reassign
      currentIndex = parseInt(mediaSelected.id.split('-')[1], 10);
    } else {
      currentIndex = mediaId;
    }
    const itemSelected = document.querySelector(`#item-${currentIndex}`);

    itemSelected.style.display = 'flex';
    divCarousel.style.display = 'flex';
    divCarousel.ariaHidden = 'false';
    main.ariaHidden = 'true';
    body.classList.add('no-scroll');
  }
}

/**
 * Close lightbox
 */
// eslint-disable-next-line no-unused-vars
function closeCarousel() {
  const divCarousel = document.querySelector('.div-carousel');
  const main = document.querySelector('main');
  const body = document.querySelector('body');
  const itemSelected = document.querySelector(`#item-${currentIndex}`);

  divCarousel.style.display = 'none';
  divCarousel.ariaHidden = 'true';
  itemSelected.style.display = 'none';
  main.ariaHidden = 'false';
  body.classList.remove('no-scroll');
}

/**
 * Display next media
 */
// eslint-disable-next-line no-unused-vars
function nextItem() {
  const currentItem = document.querySelector(`#item-${currentIndex}`);
  const gallerieLength = document.querySelectorAll('.carousel-item').length;
  currentIndex = (currentIndex + 1) % gallerieLength;
  const newItem = document.querySelector(`#item-${currentIndex}`);
  currentItem.style.display = 'none';
  newItem.style.display = 'flex';
}

/**
 * Display previous media
 */
// eslint-disable-next-line no-unused-vars
function previousItem() {
  const currentItem = document.querySelector(`#item-${currentIndex}`);
  const gallerieLength = document.querySelectorAll('.carousel-item').length;
  if (currentIndex === 0) {
    currentIndex = gallerieLength - 1;
  } else {
    currentIndex -= 1;
  }
  const newItem = document.querySelector(`#item-${currentIndex}`);
  currentItem.style.display = 'none';
  newItem.style.display = 'flex';
}
