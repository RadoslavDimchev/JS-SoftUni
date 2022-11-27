import { login } from '../api/users.js';
import { html, nothing } from '../lib.js';
import { createSubmitHendler } from '../util.js';


const loginTemplate = (onSubmit, error) => html`
<article class="narrow">
  <header class="pad-med">
    <h1>Login</h1>
  </header>
  <form id="login-form" class="main-form pad-large" @submit=${onSubmit}>
    ${error ? html`<div class="error">${error}</div>` : nothing}
    <label>E-mail: <input type="text" name="email"></label>
    <label>Password: <input type="password" name="password"></label>
    <input class="action cta" type="submit" value="Sign In">
  </form>
  <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
  </footer>
</article>`;

export function showLogin(ctx) {
  update('');

  function update(error) {
    ctx.render(loginTemplate(createSubmitHendler(onSubmit, 'email', 'password'), error));
  }

  async function onSubmit(data) {
    try {
      if (!data.email || !data.password) {
        throw new Error('All fields are required!');
      }

      await login(data.email, data.password);
      ctx.setUserNav();
      ctx.page.redirect('/catalog');
    } catch (error) {
      update(error.message);
    }
  }
}