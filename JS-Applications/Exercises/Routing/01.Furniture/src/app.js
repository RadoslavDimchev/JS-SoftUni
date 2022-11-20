import { logout } from './api/api.js';
import { page, render } from './lib.js';
import { getUserData, removeUserData } from './util.js';

import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';


const root = document.querySelector('div.container');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', catalogView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/login', loginView);
page('/register', registerView);
page('/my-furniture', catalogView);

updateUserNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  ctx.updateUserNav = updateUserNav;
  next();
}

async function updateUserNav() {
  if (getUserData() !== null) {
    document.getElementById('user').style.display = 'inline-block';
    document.getElementById('guest').style.display = 'none';
  } else {
    document.getElementById('user').style.display = 'none';
    document.getElementById('guest').style.display = 'inline-block';
  }
}

async function onLogout() {
  await logout();
  removeUserData();
  updateUserNav();
  page.redirect('/');
}