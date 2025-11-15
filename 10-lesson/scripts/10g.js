function changeStatus(buttonName) {
  const buttonElement = document.querySelector(`.${buttonName}`);

  if (!buttonElement.classList.contains('is-toggled')) {
    turnOffButton();
    buttonElement.classList.add('is-toggled');
  } else {
    buttonElement.classList.remove('is-toggled');
  }
}

function turnOffButton() {
  const previousButton = document.querySelector('.is-toggled');
  
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}