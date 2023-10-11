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
  const photographerModel = photographerTemplate(photographer);
  const photographInformationsDOM = photographerModel.getUserInformationsDOM();
  const photographImgDOM = photographerModel.getUserImgDOM();
  photographHeader.insertBefore(photographInformationsDOM, photographHeader.children[0]);
  photographHeader.appendChild(photographImgDOM);
}

async function displayPhotographerMedias(medias, photographerName) {
  const gallerySection = document.querySelector('.gallery');
  medias.forEach((media) => {
    const mediaModel = mediaTemplate(media, photographerName);
    const mediaGallery = mediaModel.getUserGalleryDOM();
    gallerySection.appendChild(mediaGallery);
  });
}

async function displayInsetLikesAndPrice(photographer) {
  // calcul nb de likes
  const divLikes = document.querySelector('.likes');
  const p = document.createElement('p');
  p.textContent = 'nblikes';
  const heartIcon = document.createElement('i');
  heartIcon.classList = 'fa-solid fa-xs fa-heart';
  divLikes.appendChild(p);
  divLikes.appendChild(heartIcon);
  const divAmount = document.querySelector('.amount');
  divAmount.textContent = `${photographer.price}€ / jour`;
}

async function init() {
// Récupère les datas des photographes
  const { photographer, medias } = await getPhotographersDatas();
  displayPhotographerHeader(photographer);
  displayPhotographerMedias(medias, photographer.name);
  displayInsetLikesAndPrice(photographer);
}

init();
