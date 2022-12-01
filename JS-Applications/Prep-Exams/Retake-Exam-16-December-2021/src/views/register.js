import { register } from '../api/users.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';


const registerTemplate = (onSubmit) => html`
<section id="registerPage">
  <form @submit=${onSubmit} class="registerForm">
    <h2>Register</h2>
    <div class="on-dark">
      <label for="email">Email:</label>
      <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
    </div>

    <div class="on-dark">
      <label for="password">Password:</label>
      <input id="password" name="password" type="password" placeholder="********" value="">
    </div>

    <div class="on-dark">
      <label for="repeatPassword">Repeat Password:</label>
      <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
    </div>

    <button class="btn" type="submit">Register</button>

    <p class="field">
      <span>If you have profile click <a href="/login">here</a></span>
    </p>
  </form>
</section>`;

export function showRegister(ctx) {
  ctx.render(registerTemplate(createSubmitHandler(onSubmit)));

  async function onSubmit({ email, password, repeatPassword }, form) {
    if (!email || !password) {
      return alert('All fields are required!');
    }
    if (password !== repeatPassword) {
      return alert('Passwords don\'t match!');
    }

    await register(email, password);
    form.reset();
    ctx.updateNav();
    ctx.page.redirect('/');
  }
}