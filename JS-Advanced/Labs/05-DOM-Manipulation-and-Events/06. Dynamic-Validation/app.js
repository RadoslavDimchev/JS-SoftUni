function validate() {
  const email = document.getElementById('email');
  const pattern = /[a-z]+@[a-z]+\.[a-z]+/;

  email.addEventListener('change', onChange);

  function onChange() {
    if (pattern.test(email.value)) {
      email.classList.remove('error');
    } else {
      email.classList.add('error');
    }
  }
}