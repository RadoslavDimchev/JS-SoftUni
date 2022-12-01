import { logout } from './api/users.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showMyListings } from './views/myListings.js';
import { showRegister } from './views/register.js';
import { showSearch } from './views/search.js';


const main = document.getElementById('site-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/catalog', showCatalog);
page('/create', showCreate);
page('/catalog/:id', showDetails);
page('/edit/:id', showEdit);
page('/my-listings', showMyListings);
page('/search', showSearch);

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
    document.getElementById('profile').style.display = 'block';
    document.getElementById('guest').style.display = 'none';
    document.querySelector('#profile a').textContent = `Welcome ${userData.username}`;
  } else {
    document.getElementById('profile').style.display = 'none';
    document.getElementById('guest').style.display = 'block';
  }
}

function onLogout() {
  logout();
  updateNav();
  page.redirect('/');
}