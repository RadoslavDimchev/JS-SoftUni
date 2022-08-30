function toggle() {
  const button = document.getElementsByClassName('button')[0];
  const hiddenText = document.getElementById('extra');

  if (button.textContent === 'More') {
    button.textContent = 'Less';
    hiddenText.style.display = 'block';
  } else {
    button.textContent = 'More';
    hiddenText.style.display = 'none';
  }
}