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

  return { name, picture, getUserCardDOM };
}
