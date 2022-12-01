import { login } from '../api/users.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';


const loginTemplate = (onSubmit) => html`
<section id="login">
  <div class="container">
    <form @submit=${onSubmit} id="login-form" action="#" method="post">
      <h1>Login</h1>
      <p>Please enter your credentials.</p>
      <hr>

      <p>Username</p>
      <input placeholder="Enter Username" name="username" type="text">

      <p>Password</p>
      <input type="password" placeholder="Enter Password" name="password">
      <input type="submit" class="registerbtn" value="Login">
    </form>
    <div class="signin">
      <p>Dont have an account?
        <a href="/register">Sign up</a>.
      </p>
    </div>
  </div>
</section>`;

export function showLogin(ctx) {
  ctx.render(loginTemplate(createSubmitHandler(onSubmit)));

  async function onSubmit({ username, password }, form) {
    if (!username || !password) {
      return alert('All fields are required!');
    }

    await login(username, password);
    form.reset();
    ctx.updateNav();
    ctx.page.redirect('/catalog');
  }
}