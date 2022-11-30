import { page, render } from './lib.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { updateNav } from './views/nav.js';
import { showRegister } from './views/register.js';


const main = document.getElementById('content');

page(decorateContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/edit/:id', showEdit);
page('/create', showCreate);
page('/login', showLogin);
page('/register', showRegister);

updateNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, main);
  ctx.updateNav = updateNav;

  next();
}