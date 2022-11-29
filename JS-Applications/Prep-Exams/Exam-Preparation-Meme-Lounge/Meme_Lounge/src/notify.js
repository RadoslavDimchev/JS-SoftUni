const container = document.querySelector('.notification');

export function showNotification(message) {
  container.querySelector('span').textContent = message;
  container.style.display = 'block';

  setTimeout(() => container.style.display = 'none', 3000);
}