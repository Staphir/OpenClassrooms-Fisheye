'use strict';

/**
 * Represents an item from the list of lightbox items
 *
 * @constructor
 * @param {object} data
 * @param {string} photographerName
 * @param {int} index
 * @returns {
 *          {
 *            title: string;
 *            image: string;
 *            video: string;
 *            itemId: int;
 *            getUserCarouselDOM: () => object;
 *          }
 *          }
 */
// eslint-disable-next-line no-unused-vars
function carouselTemplate(data, photographerName, index) {
  const {
    title, image, video,
  } = data;
  const itemId = index;
  const firstname = photographerName.split(' ')[0];

  /**
   * Create li with DOM HTML to create one item of the list of lightbox's media items
   *
   * @returns {object} li - li tag with DOM HTML inside
   */
  function getUserCarouselDOM() {
    const li = document.createElement('li');
    li.classList = 'carousel-item';
    li.id = `item-${itemId}`;
    li.role = 'list-item';

    const divLeftArrow = document.createElement('div');
    divLeftArrow.role = 'button';
    divLeftArrow.classList = 'controls controls-left';
    const spanLeftArrow = document.createElement('span');
    spanLeftArrow.classList = 'img prev-image';
    const iLeftArrow = document.createElement('i');
    iLeftArrow.ariaHidden = 'true';
    iLeftArrow.classList = 'fa-solid fa-angle-left fa-3x';
    // eslint-disable-next-line no-undef
    iLeftArrow.addEventListener('click', previousItem);
    const pLeftArrow = document.createElement('p');
    pLeftArrow.classList = 'sr-only';
    pLeftArrow.textContent = 'Précédent';

    spanLeftArrow.appendChild(iLeftArrow);
    divLeftArrow.appendChild(spanLeftArrow);
    divLeftArrow.appendChild(pLeftArrow);
    li.appendChild(divLeftArrow);

    const divMedia = document.createElement('div');
    divMedia.classList = 'carousel-media';

    if (image) {
      const img = document.createElement('img');
      img.src = `assets/Sample Photos/${firstname}/${image}`;
      img.alt = title;
      divMedia.appendChild(img);
    } else {
      const videoElement = document.createElement('video');
      const videoTitle = document.createElement('title');
      videoElement.src = `assets/Sample Photos/${firstname}/${video}`;
      videoElement.controls = true;
      videoTitle.textContent = title;
      videoElement.appendChild(videoTitle);
      divMedia.appendChild(videoElement);
    }
    const pMediaTitle = document.createElement('p');
    pMediaTitle.classList = 'media-title';
    pMediaTitle.textContent = title;
    divMedia.appendChild(pMediaTitle);
    li.appendChild(divMedia);

    const divCloseCross = document.createElement('div');
    divCloseCross.role = 'button';
    divCloseCross.classList = 'close-carousel';
    // eslint-disable-next-line no-undef
    divCloseCross.addEventListener('click', closeCarousel);
    const pCloseCross = document.createElement('p');
    pCloseCross.classList = 'sr-only';
    pCloseCross.textContent = 'Fermer';
    const iCloseCross = document.createElement('i');
    iCloseCross.classList = 'fa-solid fa-xmark fa-3x';
    const divRightArrow = document.createElement('div');
    divRightArrow.role = 'button';
    divRightArrow.classList = 'controls controls-right';
    const spanRightArrow = document.createElement('span');
    spanRightArrow.classList = 'img prev-image';
    const iRightArrow = document.createElement('i');
    iRightArrow.ariaHidden = 'true';
    iRightArrow.classList = 'fa-solid fa-angle-right fa-3x';
    // eslint-disable-next-line no-undef
    iRightArrow.addEventListener('click', nextItem);
    const pRightArrow = document.createElement('p');
    pRightArrow.classList = 'sr-only';
    pRightArrow.textContent = 'Suivant';

    divCloseCross.appendChild(pCloseCross);
    divCloseCross.appendChild(iCloseCross);
    li.appendChild(divCloseCross);

    spanRightArrow.appendChild(iRightArrow);
    divRightArrow.appendChild(spanRightArrow);
    divRightArrow.appendChild(pRightArrow);
    li.appendChild(divRightArrow);

    return li;
  }

  return {
    title,
    image,
    video,
    itemId,
    getUserCarouselDOM,
  };
}
