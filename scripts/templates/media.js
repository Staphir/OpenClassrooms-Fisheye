'use strict';

/**
 * Represent a media
 *
 * @param {object} data
 * @param {object} photographer
 * @param {int} index
 * @returns {
 *          {
 *           id: int;
 *           photographerId: int;
 *           title: string;
 *           image: string;
 *           likes: int;
 *           date: string;
 *           price: int;
 *           photographer: object;
 *           getUserGalleryDOM: () => object;
 *          }
 *          }
 */
// eslint-disable-next-line no-unused-vars
function mediaTemplate(data, photographer, index) {
  const {
    id, photographerId, title, image, video, likes, date, price,
  } = data;
  const firstname = photographer.name.split(' ')[0];
  const mediaId = index;

  /**
   * Create DOM HTML of a media's card
   *
   * @returns {object} divAllBlock - tag on a media's card
   */
  function getUserGalleryDOM() {
    const divAllBlock = document.createElement('div');
    divAllBlock.className = 'media';
    divAllBlock.id = `media-${mediaId}`;
    if (image) {
      const img = document.createElement('img');
      img.src = `assets/Sample Photos/${firstname}/${image}`;
      img.alt = title;
      img.tabIndex = 0;
      // eslint-disable-next-line no-undef
      img.addEventListener('click', displayCarousel);
      img.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          // eslint-disable-next-line no-undef
          displayCarousel(mediaId);
        }
      });
      divAllBlock.appendChild(img);
    } else {
      const videoElement = document.createElement('video');
      const videoTitle = document.createElement('title');
      videoElement.src = `assets/Sample Photos/${firstname}/${video}`;
      videoElement.controls = true;
      videoElement.tabIndex = 0;
      // eslint-disable-next-line no-undef
      videoElement.addEventListener('click', displayCarousel);
      videoElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          // eslint-disable-next-line no-undef
          displayCarousel(mediaId);
        }
      });
      videoTitle.textContent = title;
      videoElement.appendChild(videoTitle);
      divAllBlock.appendChild(videoElement);
    }
    const divTextMedia = document.createElement('div');
    divTextMedia.className = 'divTextMedia';
    const p = document.createElement('p');
    p.textContent = title;
    const divLikes = document.createElement('div');
    divLikes.textContent = likes;
    const i = document.createElement('i');
    i.classList.add('fa-solid');
    i.classList.add('fa-heart');
    i.ariaLabel = 'likes';

    i.addEventListener('click', () => {
      if (!divLikes.classList.contains('liked')) {
        let nbLikes = parseInt(divLikes.textContent, 10);
        nbLikes += 1;
        divLikes.textContent = nbLikes;
        divLikes.classList.add('liked');
        divLikes.appendChild(i);
        // eslint-disable-next-line no-undef
        totalLikes += 1;
        // eslint-disable-next-line no-undef
        increaseLikes();
      }
    });

    divLikes.appendChild(i);
    divTextMedia.appendChild(p);
    divTextMedia.appendChild(divLikes);
    divAllBlock.appendChild(divTextMedia);
    return divAllBlock;
  }

  return {
    id,
    photographerId,
    title,
    image,
    likes,
    date,
    price,
    photographer,
    getUserGalleryDOM,
  };
}
