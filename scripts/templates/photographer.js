'use strict';

/**
 * Represent a photographer
 *
 * @constructor
 * @param {object} data
 * @returns {
 *          {
 *           name: string;
 *           id: int;
 *           city: string;
 *           country: string;
 *           tagline: string;
 *           price: int;
 *           portrait: string;
 *           getUserCardDOM: () => object;
 *           getUserInformationsDOM: () => object;
 *           getUserImgDOM: () => object;
 *          }
 *          }
 */
// eslint-disable-next-line no-unused-vars
function photographerTemplate(data) {
  const {
    name, id, city, country, tagline, price, portrait,
  } = data;

  const picture = `assets/photographers/${portrait}`;
  const photographerPage = `./photographer.html?id=${id}`;

  /**
   * Create DOM HTML of a photographer's card
   *
   * @returns {object} article - tag on a photographer's card
   */
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

  /**
   * Create DOM HTML of photographer's information display in photographer page
   *
   * @returns {object} div - tag on a photographer's information
   */
  function getUserInformationsDOM() {
    const userInfohgroup = document.createElement('hgroup');
    userInfohgroup.id = 'photograph-informations';
    const h1 = document.createElement('h1');
    h1.textContent = name;
    const localisation = document.createElement('p');
    localisation.className = 'localisation';
    localisation.textContent = `${city}, ${country}`;
    const description = document.createElement('p');
    description.className = 'description';
    description.textContent = tagline;
    userInfohgroup.appendChild(h1);
    userInfohgroup.appendChild(localisation);
    userInfohgroup.appendChild(description);
    return userInfohgroup;
  }

  /**
   * Create DOM HTML of photographer's picture
   *
   * @returns {object} img - tag photographer picture
   */
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
