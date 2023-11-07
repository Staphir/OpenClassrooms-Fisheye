'use strict';

/**
 * Use fetch request to get photographers datas in json file 'photographers.json'
 *
 * @async
 * @returns {object} data - photographers datas
 */
async function getPhotographers() {
  try {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    console.log(typeof data);
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Une erreur s\'est produite lors du chargement du fichier JSON:', error);
    return null;
  }
}

/**
 * Display photographers cards
 *
 * @async
 * @param {object} photographers - all photographers informations
 */
async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');
  photographers.forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

/**
 * Main function of fisheye homepage
 *
 * @async
 */
async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
