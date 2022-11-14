import { login } from '../api/users.js';


const section = document.getElementById('loginPage');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;

export function showLogin(context) {
  ctx = context;
  ctx.showSection(section);
}

async function onSubmit(ev) {
  ev.preventDefault();

  const formData = new FormData(form);

  const email = formData.get('email');
  const password = formData.get('password');

  await login(email, password);
  form.reset();
  ctx.updateNav();
  ctx.goTo('/');
}