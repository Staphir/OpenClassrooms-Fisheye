// eslint-disable-next-line no-unused-vars
function displayModal() {
  const modal = document.querySelector('#contact_modal');
  const main = document.querySelector('main');
  const body = document.querySelector('body');
  const modalCloseBtn = document.querySelector('#modal_close');
  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');
  main.setAttribute('aria-hidden', 'true');
  body.classList.add('no-scroll');
  modalCloseBtn.focus();
}

// eslint-disable-next-line no-unused-vars
function closeModal() {
  const modal = document.querySelector('#contact_modal');
  const main = document.querySelector('main');
  const body = document.querySelector('body');
  const modalOpenBtn = document.querySelector('.contact_button');
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  main.setAttribute('aria-hidden', 'false');
  body.classList.remove('no-scroll');
  modalOpenBtn.focus();
}

function formComplete(formInformations) {
  let error = false;
  const parentDiv = formInformations[0].parentElement;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  formInformations.forEach((information) => {
    if (information.id === 'firstname' && !information.value) {
      error = true;
      const errorText = document.createElement('p');
      errorText.innerHTML = 'Veuillez entrer un prénom';
      errorText.className = 'text-error';
      parentDiv.insertBefore(errorText, information.nextSibling);
    } else if (information.id === 'name' && !information.value) {
      error = true;
      const errorText = document.createElement('p');
      errorText.innerHTML = 'Veuillez entrer un nom';
      errorText.className = 'text-error';
      parentDiv.insertBefore(errorText, information.nextSibling);
    } else if (information.id === 'email' && !information.value && !emailRegex.test(information.value)) {
      error = true;
      const errorText = document.createElement('p');
      errorText.innerHTML = 'Veuillez entrer un email valide';
      errorText.className = 'text-error';
      parentDiv.insertBefore(errorText, information.nextSibling);
    } else if (information.id === 'message' && !information.value) {
      error = true;
      const errorText = document.createElement('p');
      errorText.innerHTML = 'Veuillez entrer un message';
      errorText.className = 'text-error';
      parentDiv.insertBefore(errorText, information.nextSibling);
    }
  });
  return !error;
}

function cleanTextError(formInformations) {
  formInformations.forEach((information) => {
    if (information.nextSibling.className === 'text-error') {
      information.parentElement.removeChild(information.nextSibling);
    }
  });
}

// eslint-disable-next-line no-unused-vars
function sendContactMessage(ev) {
  ev.preventDefault();
  const formInformations = document.querySelectorAll('.form_information');
  cleanTextError(formInformations);
  if (formComplete(formInformations) === true) {
    formInformations.forEach((information) => {
      // eslint-disable-next-line no-console
      console.log(information.value);
    });
  }
}
