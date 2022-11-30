import { logout } from '../api/users.js';
import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';


const navTemplate = (userData) => html`
<nav>
  <section class="logo">
    <img src="./images/logo.png" alt="logo">
  </section>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/catalog">Dashboard</a></li>
    ${!userData
    ? html`
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>`
    : html`
    <li><a href="/create">Create Postcard</a></li>
    <li><a @click=${onLogout} href="javascript:void(0)">Logout</a></li>`}
  </ul>
</nav>`;

export function updateNav() {
  const userData = getUserData();
  render(navTemplate(userData), document.querySelector('header'));
}

function onLogout() {
  logout();
  updateNav();
  page.redirect('/');
}