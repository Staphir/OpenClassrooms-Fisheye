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

async function displayPhotographerHeader(photographer) {
  const photographHeader = document.querySelector('.photograph-header');
  // eslint-disable-next-line no-undef
  const photographerModel = photographerTemplate(photographer);
  const photographInformationsDOM = photographerModel.getUserInformationsDOM();
  const photographImgDOM = photographerModel.getUserImgDOM();
  photographHeader.insertBefore(photographInformationsDOM, photographHeader.children[0]);
  photographHeader.appendChild(photographImgDOM);
}

async function displayPhotographerMedias(medias, photographerName) {
  const gallerySection = document.querySelector('.gallery');
  medias.forEach((media) => {
    // eslint-disable-next-line no-undef
    const mediaModel = mediaTemplate(media, photographerName);
    const mediaGallery = mediaModel.getUserGalleryDOM();
    gallerySection.appendChild(mediaGallery);
  });
}

function totalLike(medias) {
  let likes = 0;
  medias.forEach((media) => {
    likes += media.likes;
  });
  return likes;
}

async function displayInsetLikesAndPrice(photographer, medias) {
  const totalLikes = totalLike(medias);
  const divLikes = document.querySelector('.likes');
  const p = document.createElement('p');
  p.textContent = totalLikes;
  const heartIcon = document.createElement('i');
  heartIcon.classList = 'fa-solid fa-xs fa-heart';
  divLikes.appendChild(p);
  divLikes.appendChild(heartIcon);
  const divAmount = document.querySelector('.amount');
  divAmount.textContent = `${photographer.price}€ / jour`;
}

function sortMedias(medias) {
  const sortValue = document.querySelector('#sort').value;
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

async function init() {
  getPhotographersDatas()
    .then((response) => {
      // eslint-disable-next-line prefer-const
      let { photographer, medias } = response;
      displayPhotographerHeader(photographer);
      medias = sortMedias(medias);
      displayPhotographerMedias(medias, photographer.name);
      displayInsetLikesAndPrice(photographer, medias);

      const sortSelect = document.querySelector('#sort');
      sortSelect.addEventListener('change', () => {
        console.log('changed');
        medias = sortMedias(medias);
        displayInsetLikesAndPrice(medias, photographer.name);
      });
    });
}

init();
