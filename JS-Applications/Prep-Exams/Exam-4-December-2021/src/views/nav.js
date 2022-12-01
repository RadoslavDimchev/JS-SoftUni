import { logout } from '../api/users.js';
import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';

const navTemplate = (userData, onLogout) => html`
<nav>
  <img src="./images/headphones.png">
  <a href="/">Home</a>
  <ul>
    <!--All user-->
    <li><a href="/catalog">Catalog</a></li>
    <li><a href="/search">Search</a></li>
    ${!userData
    ? html`
    <!--Only guest-->
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>`
    : html`
    <!--Only user-->
    <li><a href="/create">Create Album</a></li>
    <li><a @click=${onLogout} href="javascript:void(0)">Logout</a></li>`}
  </ul>
</nav>`;

export function updateNav() {
  const userData = getUserData();
  render(navTemplate(userData, onLogout), document.querySelector('header'));

  function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
  }
}