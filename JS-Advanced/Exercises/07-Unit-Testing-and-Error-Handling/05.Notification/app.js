function notify(message) {
  const dviEl = document.getElementById('notification');

  dviEl.textContent = message;
  dviEl.style.display = 'block';

  dviEl.addEventListener('click', () => {
    dviEl.style.display = 'none';
  });
}