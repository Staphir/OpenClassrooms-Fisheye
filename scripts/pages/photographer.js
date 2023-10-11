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

async function displayPhotographerMedias(medias) {
  // Attention mediatemplate boucle sur medias mais ne faire qu'une fois getSortDivDOM()
  const gallerySection = document.querySelector('.gallery');
  medias.forEach((media) => {
    const mediaModel = mediaTemplate(media);
    const mediaGallery = mediaModel.getUserGalleryDOM();
    gallerySection.appendChild(mediaGallery);
  });
  // const sortDivDOM = mediaModel.getSortDivDOM();
  // gallerySection.appendChild(sortDivDOM);
}

async function init() {
// Récupère les datas des photographes
  const { photographer, medias } = await getPhotographersDatas();
  displayPhotographerHeader(photographer);
  displayPhotographerMedias(medias);
}

init();
