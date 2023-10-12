// eslint-disable-next-line no-unused-vars
function photographerTemplate(data) {
  const {
    name, id, city, country, tagline, price, portrait,
  } = data;

  const picture = `assets/photographers/${portrait}`;
  const photographerPage = `./photographer.html?id=${id}`;

  function getUserCardDOM() {
    const article = document.createElement('article');
    const photographerLink = document.createElement('a');
    photographerLink.setAttribute('href', photographerPage);
    photographerLink.setAttribute('aria-label', name);
    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('alt', '');
    const h2 = document.createElement('h2');
    h2.textContent = name;
    const localisation = document.createElement('p');
    localisation.className = 'localisation';
    localisation.textContent = `${city}, ${country}`;
    const description = document.createElement('p');
    description.className = 'description';
    description.textContent = tagline;
    const amount = document.createElement('p');
    amount.className = 'amount';
    amount.textContent = `${price}€/jour`;
    photographerLink.appendChild(img);
    photographerLink.appendChild(h2);
    article.appendChild(photographerLink);
    article.appendChild(localisation);
    article.appendChild(description);
    article.appendChild(amount);
    return (article);
  }

  function getUserInformationsDOM() {
    const div = document.createElement('div');
    div.id = 'photograph-informations';
    const h1 = document.createElement('h1');
    h1.textContent = name;
    const localisation = document.createElement('p');
    localisation.className = 'localisation';
    localisation.textContent = `${city}, ${country}`;
    const description = document.createElement('p');
    description.className = 'description';
    description.textContent = tagline;
    div.appendChild(h1);
    div.appendChild(localisation);
    div.appendChild(description);
    return div;
  }

  function getUserImgDOM() {
    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('alt', name);
    return img;
  }

  return {
    name,
    id,
    city,
    country,
    tagline,
    price,
    portrait,
    getUserCardDOM,
    getUserInformationsDOM,
    getUserImgDOM,
  };
}

// eslint-disable-next-line no-unused-vars
function mediaTemplate(data, photographerName) {
  const {
    id, photographerId, title, image, video, likes, date, price,
  } = data;
  const firstname = photographerName.split(' ')[0];

  function getUserGalleryDOM() {
    const divAllBlock = document.createElement('div');
    divAllBlock.className = 'media';
    if (image) {
      // const figure = document.createElement('figure');
      const img = document.createElement('img');
      // changer Mimi en name
      img.src = `assets/Sample Photos/${firstname}/${image}`;
      divAllBlock.appendChild(img);
    } else {
      const videoElement = document.createElement('video');
      // changer Mimi en name
      videoElement.src = `assets/Sample Photos/${firstname}/${video}`;
      videoElement.controls = true;
      divAllBlock.appendChild(videoElement);
    }
    const divTextMedia = document.createElement('div');
    divTextMedia.className = 'divTextMedia';
    const p = document.createElement('p');
    p.textContent = title;
    const divLikes = document.createElement('div');
    // nombre de like chiffre dynamique
    divLikes.textContent = likes;
    const i = document.createElement('i');
    i.classList.add('fa-solid');
    i.classList.add('fa-heart');
    i.ariaLabel = 'likes';
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
    getUserGalleryDOM,
  };
}
