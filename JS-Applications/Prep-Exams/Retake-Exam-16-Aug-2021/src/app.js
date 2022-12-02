import { logout } from './api/users.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';


const main = document.getElementById('main-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/edit/:id', showEdit);
page('/create', showCreate);
page('/login', showLogin);
page('/register', showRegister);

// Start Application
updateNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, main);
  ctx.updateNav = updateNav;

  const userData = getUserData();
  if (userData) {
    ctx.userData = userData;
  }

  next();
}

function updateNav() {
  const userData = getUserData();
  if (userData) {
    document.getElementById('user').style.display = 'block';
    document.getElementById('guest').style.display = 'none';
  } else {
    document.getElementById('user').style.display = 'none';
    document.getElementById('guest').style.display = 'block';
  }
}

function onLogout() {
  logout();
  updateNav();
  page.redirect('/');
}