function validate() {
  const inputEl = document.getElementById('email');
  const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

  inputEl.addEventListener('change', () => {
    if (pattern.test(inputEl.value)) {
      inputEl.classList.remove('error');
    } else {
      inputEl.classList.add('error');
    }
  });
}