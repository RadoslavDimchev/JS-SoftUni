import { logout } from './api/users.js';
import { page, render } from './lib.js';
import { clearUserData, getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';


const root = document.querySelector('main');
setUserNav();

document.getElementById('logoutBtn').addEventListener('click', () => {
  logout();
  clearUserData();
  setUserNav();
  page.redirect('/');
});


page(decorateContext);

page('/', showHome);
page('/register', showRegister);
page('/login', showLogin);
page('/catalog', showCatalog);
page('/my-teams', showCatalog);
page('/create', showCreate);
page('/catalog/:id', showDetails);
page('/edit/:id', showEdit);

page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  ctx.setUserNav = setUserNav;
  next();
}

function setUserNav() {
  const userData = getUserData();
  if (userData) {
    document.getElementById('user').style.display = 'inline-block';
    document.getElementById('guest').style.display = 'none';
  } else {
    document.getElementById('user').style.display = 'none';
    document.getElementById('guest').style.display = 'inline-block';
  }
}