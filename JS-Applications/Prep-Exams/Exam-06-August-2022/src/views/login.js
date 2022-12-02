import { login } from '../api/users.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';


const loginTemplate = (onSubmit) => html`
<section id="login">
  <div class="form">
    <h2>Login</h2>
    <form @submit=${onSubmit} class="login-form">
      <input type="text" name="email" id="email" placeholder="email" />
      <input type="password" name="password" id="password" placeholder="password" />
      <button type="submit">login</button>
      <p class="message">
        Not registered? <a href="/register">Create an account</a>
      </p>
    </form>
  </div>
</section>`;

export function showLogin(ctx) {
  ctx.render(loginTemplate(createSubmitHandler(onSubmit)));

  async function onSubmit({ email, password }, form) {
    if (!email || !password) {
      return alert('All fields are required!');
    }

    await login(email, password);
    form.reset();
    ctx.updateNav();
    ctx.page.redirect('/catalog');
  }
}