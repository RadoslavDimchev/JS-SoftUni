import { logout } from '../api/users.js';
import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';

const navTemplate = (userData, onLogout) => html`
<nav>
  <a href="/">Theater</a>
  <ul>
    ${userData
      ? html`
          <li><a href="/profile">Profile</a></li>
          <li><a href="/create">Create Event</a></li>
          <li><a @click=${onLogout} href="javascript:void(0)">Logout</a></li>`
      : html`
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>`}
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