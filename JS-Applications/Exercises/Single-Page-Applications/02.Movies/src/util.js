export function checkNavbar() {
  const userData = JSON.parse(sessionStorage.getItem('user'));
  const user = document.querySelectorAll('nav .user');
  const guest = document.querySelectorAll('nav .guest');

  if (userData) {
    user.forEach(i => i.style.display = 'inline-block');
    guest.forEach(i => i.style.display = 'none');
    document.getElementById('welcome-msg').textContent = 'Welcome, ' +  userData.email;
  } else {
    user.forEach(i => i.style.display = 'none');
    guest.forEach(i => i.style.display = 'inline-block');
  }
}

export function showView(section) {
  [...document.querySelectorAll('.view-section')]
    .forEach(s => s.style.display = 'none');

  section.style.display = 'block';
}