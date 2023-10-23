// eslint-disable-next-line no-unused-vars
function carouselTemplate(data, photographerName, index) {
  const {
    title, image, video,
  } = data;
  const itemId = index;
  const firstname = photographerName.split(' ')[0];

  function getUserCarouselDOM() {
    const li = document.createElement('li');
    li.classList = 'carousel-item';
    li.id = `item-${itemId}`;

    // left control panel
    const divLeftPanel = document.createElement('div');
    divLeftPanel.classList = 'left-panel';
    const divLeftArrow = document.createElement('div');
    divLeftArrow.role = 'button';
    divLeftArrow.classList = 'controls controls-left';
    const spanLeftArrow = document.createElement('span');
    spanLeftArrow.classList = 'img prev-image';
    const iLeftArrow = document.createElement('i');
    iLeftArrow.ariaHidden = 'true';
    iLeftArrow.classList = 'fa-solid fa-angle-left fa-2xl';
    // eslint-disable-next-line no-undef
    iLeftArrow.addEventListener('click', previousItem);
    const pLeftArrow = document.createElement('p');
    pLeftArrow.classList = 'sr-only';
    pLeftArrow.textContent = 'Précédent';

    spanLeftArrow.appendChild(iLeftArrow);
    divLeftArrow.appendChild(spanLeftArrow);
    divLeftArrow.appendChild(pLeftArrow);
    divLeftPanel.appendChild(divLeftArrow);
    li.appendChild(divLeftPanel);

    // img/video balise
    if (image) {
      const img = document.createElement('img');
      img.src = `assets/Sample Photos/${firstname}/${image}`;
      li.appendChild(img);
    } else {
      const videoElement = document.createElement('video');
      videoElement.src = `assets/Sample Photos/${firstname}/${video}`;
      videoElement.controls = true;
      li.appendChild(videoElement);
    }

    // right control panel
    const divRightPanel = document.createElement('div');
    divRightPanel.classList = 'right-panel';
    const divCloseCross = document.createElement('div');
    divCloseCross.classList = 'close-carousel';
    // eslint-disable-next-line no-undef
    divCloseCross.addEventListener('click', closeCarousel);
    const pCloseCross = document.createElement('p');
    pCloseCross.classList = 'sr-only';
    pCloseCross.textContent = 'Fermer';
    const iCloseCross = document.createElement('i');
    iCloseCross.classList = 'fa-solid fa-xmark fa-2xl';
    const divRightArrow = document.createElement('div');
    divRightArrow.role = 'button';
    divRightArrow.classList = 'controls controls-right';
    const spanRightArrow = document.createElement('span');
    spanRightArrow.classList = 'img prev-image';
    const iRightArrow = document.createElement('i');
    iRightArrow.ariaHidden = 'true';
    iRightArrow.classList = 'fa-solid fa-angle-right fa-2xl';
    // eslint-disable-next-line no-undef
    iRightArrow.addEventListener('click', nextItem);
    const pRightArrow = document.createElement('p');
    pRightArrow.classList = 'sr-only';
    pRightArrow.textContent = 'Suivant';

    divCloseCross.appendChild(pCloseCross);
    divCloseCross.appendChild(iCloseCross);
    divRightPanel.appendChild(divCloseCross);
    spanRightArrow.appendChild(iRightArrow);
    divRightArrow.appendChild(spanRightArrow);
    divRightArrow.appendChild(pRightArrow);
    divRightPanel.appendChild(divRightArrow);
    li.appendChild(divRightPanel);

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
