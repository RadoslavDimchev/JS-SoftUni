import { login } from '../api/users.js';
import { html } from '../lib.js';
import { showNotification } from '../notify.js';


const loginTemplate = (onSubmit) => html`
<section id="login">
  <form id="login-form" @submit=${onSubmit}>
    <div class="container">
      <h1>Login</h1>
      <label for="email">Email</label>
      <input id="email" placeholder="Enter Email" name="email" type="text">
      <label for="password">Password</label>
      <input id="password" type="password" placeholder="Enter Password" name="password">
      <input type="submit" class="registerbtn button" value="Login">
      <div class="container signin">
        <p>Dont have an account?<a href="/register">Sign up</a>.</p>
      </div>
    </div>
  </form>
</section>`;

export function loginView(ctx) {
  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    if (email === '' || password === '') {
      return showNotification('All fields are required!');
    }

    await login(email, password);
    ctx.updateNav();
    ctx.page.redirect('/catalog');
  }
}