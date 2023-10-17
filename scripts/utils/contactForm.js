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

function sendContactMessage(ev) {
  ev.preventDefault();
  const formInformations = document.querySelectorAll('.form_information');
  formInformations.forEach((information) => {
    // eslint-disable-next-line no-console
    console.log(information.value);
  });
}
