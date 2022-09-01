function attachGradientEvents() {
  const gradient = document.getElementById('gradient-box');
  const result = document.getElementById('result');

  gradient.addEventListener('mousemove', gradientMove);

  function gradientMove(ev) {
    result.textContent = Math.floor(ev.offsetX / ev.target.clientWidth * 100) + '%';
  }
}