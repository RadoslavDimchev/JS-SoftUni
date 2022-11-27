import { register } from '../api/users.js';
import { html, nothing } from '../lib.js';
import { createSubmitHendler } from '../util.js';


const registerTemplate = (onSubmit, error) => html`
<article class="narrow">
  <header class="pad-med">
    <h1>Register</h1>
  </header>
  <form id="register-form" class="main-form pad-large" @submit=${onSubmit}>
    ${error ? html`<div class="error">${error}</div>` : nothing}
    <label>E-mail: <input type="text" name="email"></label>
    <label>Username: <input type="text" name="username"></label>
    <label>Password: <input type="password" name="password"></label>
    <label>Repeat: <input type="password" name="repass"></label>
    <input class="action cta" type="submit" value="Create Account">
  </form>
  <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
  </footer>
</article>`;

export function showRegister(ctx) {
  update('');

  function update(error) {
    ctx.render(registerTemplate(createSubmitHendler(onSubmit, 'email', 'username', 'password', 'repass'), error));
  }

  async function onSubmit(data) {
    try {
      if (!data.email || !data.username || !data.password) {
        throw new Error('All fields are required!');
      }
      if (data.username.length < 3) {
        throw new Error('Username must be at least 3 characters!');
      }
      if (data.password.length < 3) {
        throw new Error('Password must be at least 3 characters!');
      }
      if (data.password !== data.repass) {
        throw new Error('Passwords don\'t match!');
      }

      await register(data.email, data.username, data.password);
      ctx.setUserNav();
      ctx.page.redirect('/catalog');
    } catch (error) {
      update(error.message);
    }
  }
}