import { homeView } from './home.js';
import { loginView } from './login.js';
import { registerView } from './register.js';
import { checkNavbar } from './util.js';
import { createView } from './create.js';


homeView();
checkNavbar();

const sections = {
  Movies: homeView,
  Logout: logout,
  Login: loginView,
  Register: registerView
};

document.querySelector('nav').addEventListener('click', (event) => {
  if (event.target.tagName === 'A' && event.target.href) {
    event.preventDefault();

    const view = sections[event.target.textContent];

    if (typeof view === 'function') {
      view();
    }
  }
});

document.getElementById('add-movie-button').addEventListener('click', createView);

function logout() {
  fetch('http://localhost:3030/users/logout', {
    headers: {
      'X-Authorization': JSON.parse(sessionStorage.getItem('user')).accessToken
    }
  });

  sessionStorage.removeItem('user');
  checkNavbar();
  homeView();
}