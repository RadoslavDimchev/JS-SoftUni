import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { updateNav } from './views/nav.js';
import { showRegister } from './views/register.js';
import { showSearch } from './views/search.js';


page(decorateContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/edit/:id', showEdit);
page('/create', showCreate);
page('/login', showLogin);
page('/register', showRegister);
page('/search', showSearch);

// Start Application
updateNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, document.getElementById('main-content'));
  ctx.updateNav = updateNav;

  const userData = getUserData();
  if (userData) {
    ctx.userData = userData;
  }

  next();
}