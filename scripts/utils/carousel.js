let currentIndex = 0;

// eslint-disable-next-line no-unused-vars
function displayCarousel() {
  const divCarousel = document.querySelector('.div-carousel');
  const main = document.querySelector('main');
  const body = document.querySelector('body');
  const mediaSelected = this.parentNode;
  currentIndex = parseInt(mediaSelected.id.split('-')[1], 10);
  const itemSelected = document.querySelector(`#item-${currentIndex}`);

  itemSelected.style.display = 'flex';
  divCarousel.style.display = 'block';
  divCarousel.ariaHidden = 'false';
  main.ariaHidden = 'true';
  body.classList.add('no-scroll');
}

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

// eslint-disable-next-line no-unused-vars
function nextItem() {
  const currentItem = document.querySelector(`#item-${currentIndex}`);
  const gallerieLength = document.querySelectorAll('.carousel-item').length;
  currentIndex = (currentIndex + 1) % gallerieLength;
  const newItem = document.querySelector(`#item-${currentIndex}`);
  currentItem.style.display = 'none';
  newItem.style.display = 'flex';
}

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

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    nextItem();
  }

  if (event.key === 'ArrowLeft') {
    previousItem();
  }

  if (event.key === 'Escape') {
    closeCarousel();
  }
});
