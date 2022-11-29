import { logout } from './api/users.js';
import { render, page } from './lib.js';
import { getUserData } from './util.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { profileView } from './views/profile.js';
import { registerView } from './views/register.js';


const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);

page('/', homeView);
page('/catalog', catalogView);
page('/catalog/:id', detailsView);
page('/edit/:id', editView);
page('/create', createView);
page('/my-profile', profileView);
page('/login', loginView);
page('/register', registerView);

// Start application
updateNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, main);
  ctx.updateNav = updateNav;

  next();
}

function updateNav() {
  const userData = getUserData();
  if (userData) {
    document.querySelector('.user').style.display = 'block';
    document.querySelector('.guest').style.display = 'none';
    document.querySelector('.user span').textContent = `Welcome, ${userData.email}`;
  } else {
    document.querySelector('.user').style.display = 'none';
    document.querySelector('.guest').style.display = 'block';
  }
}

function onLogout() {
  logout();
  updateNav();
  page.redirect('/');
}