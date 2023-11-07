'use strict';

let totalLikes = 0;

/**
 * Use fetch request and photographer id to get photographer informations and his medias
 *
 * @async
 * @returns {{photographer: object; medias: object}} - photographer informations and his medias
 */
async function getPhotographersDatas() {
  try {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    const params = new URL(document.location).searchParams;
    const id = params.get('id');
    const filterPhotographer = data.photographers.filter((item) => item.id === parseInt(id, 10));
    const filterMedias = data.media.filter((item) => item.photographerId === parseInt(id, 10));
    return ({ photographer: filterPhotographer[0], medias: filterMedias });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Une erreur s\'est produite lors du chargement du fichier JSON:', error);
    return null;
  }
}

/**
 * Display the banner of photographer
 *
 * @async
 * @param {object} photographer - photographer informations
 */
async function displayPhotographerHeader(photographer) {
  const photographHeader = document.querySelector('.photograph-header');
  // eslint-disable-next-line no-undef
  const photographerModel = photographerTemplate(photographer);
  const photographInformationsDOM = photographerModel.getUserInformationsDOM();
  const photographImgDOM = photographerModel.getUserImgDOM();

  photographHeader.insertBefore(photographInformationsDOM, photographHeader.children[0]);
  photographHeader.appendChild(photographImgDOM);
}

/**
 * Display the gallery of medias of photographer
 *
 * @async
 * @param {object} medias - medias informations of photographer
 * @param {object} photographer - photographer informations
 */
async function displayPhotographerMedias(medias, photographer) {
  const gallerySection = document.querySelector('.gallery');
  const carouselList = document.querySelector('#carousel');

  medias.forEach((media, index) => {
    totalLikes += media.likes;

    // eslint-disable-next-line no-undef
    const mediaModel = mediaTemplate(media, photographer, index);
    const mediaGallery = mediaModel.getUserGalleryDOM();
    gallerySection.appendChild(mediaGallery);

    // eslint-disable-next-line no-undef
    const carouselModel = carouselTemplate(media, photographer.name, index);
    const carouselMedia = carouselModel.getUserCarouselDOM();
    carouselList.appendChild(carouselMedia);
  });
}

/**
 * Update total likes text
 */
function increaseLikes() {
  const pInsetLikes = document.querySelector('.likes').firstChild;
  pInsetLikes.textContent = totalLikes;
}

/**
 * Display inset with total likes and service price
 *
 * @async
 * @param {object} photographer - photographer informations
 */
async function displayInsetLikesAndPrice(photographer) {
  const divLikes = document.querySelector('.likes');
  const p = document.createElement('p');
  p.textContent = photographer.likes;
  const heartIcon = document.createElement('i');
  heartIcon.classList = 'fa-solid fa-xs fa-heart';
  divLikes.appendChild(p);
  divLikes.appendChild(heartIcon);
  const divAmount = document.querySelector('.amount');
  divAmount.textContent = `${photographer.price}€ / jour`;

  increaseLikes();
}

/**
 * Sort medias of photographer with sortValue type (popularity, date or title)
 *
 * @param {object} medias - medias informations of photographer
 * @param {string} sortValue - current sort type
 * @returns {object} medias - sorted medias
 */
function sortMedias(medias, sortValue = 'popularity') {
  if (sortValue === 'popularity') {
    medias.sort((a, b) => b.likes - a.likes);
  } else if (sortValue === 'date') {
    medias.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });
  } else if (sortValue === 'title') {
    medias.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }
  return medias;
}

/**
 * Set modal contact title with correct photographer name
 *
 * @param {String} photographerName
 */
function headerModalPhotographerName(photographerName) {
  const headerTitle = document.querySelector('#contact_title');
  headerTitle.textContent = `Contactez-moi ${photographerName}`;
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    // eslint-disable-next-line no-undef
    nextItem();
  }

  if (event.key === 'ArrowLeft') {
    // eslint-disable-next-line no-undef
    previousItem();
  }

  if (event.key === 'Escape') {
    if (document.querySelector('.div-carousel').style.display === 'flex') {
      // eslint-disable-next-line no-undef
      closeCarousel();
    } else if (document.querySelector('#contact_modal').style.display === 'block') {
      // eslint-disable-next-line no-undef
      closeModal();
    }
  }
});

/**
 * Main function of photographer page
 *
 * @async
 */
async function init() {
  getPhotographersDatas()
    .then((response) => {
    // eslint-disable-next-line prefer-const
      let { photographer, medias } = response;
      displayPhotographerHeader(photographer);
      medias = sortMedias(medias);
      displayPhotographerMedias(medias, photographer);
      displayInsetLikesAndPrice(photographer, medias);
      const sortElements = document.querySelectorAll('.sort-element');
      const sortButton = document.querySelector('#btn');

      sortElements.forEach((element) => {
        element.addEventListener('click', () => {
          document.querySelector('.gallery').innerHTML = '';
          document.querySelector('#carousel').innerHTML = '';
          medias = sortMedias(medias, element.id);
          const currentTotalLikes = totalLikes;
          displayPhotographerMedias(medias, photographer);
          totalLikes = currentTotalLikes;
          sortButton.innerHTML = `${element.textContent}<i class="fa-solid fa-caret-down" id="arrow"></i>`;
        });
      });

      headerModalPhotographerName(photographer.name);
    });
}

init();
