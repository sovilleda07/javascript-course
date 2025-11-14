function changeStatus(buttonName) {
  const buttonElement = document.querySelector(`.${buttonName}`);

  if (!buttonElement.classList.contains('is-toggled')) {
    buttonElement.classList.add('is-toggled');
  } else {
    buttonElement.classList.remove('is-toggled');
  }
}