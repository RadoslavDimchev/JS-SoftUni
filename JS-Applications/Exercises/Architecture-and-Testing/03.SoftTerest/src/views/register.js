import { register } from '../api/users.js';


const section = document.getElementById('registerPage');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;

export function showRegister(context) {
  ctx = context;
  ctx.showSection(section);
}

async function onSubmit(ev) {
  ev.preventDefault();

  const formData = new FormData(form);

  const email = formData.get('email');
  const password = formData.get('password');
  const repeatPassword = formData.get('repeatPassword');

  try {
    if (!email || !password) {
      throw new Error('All fields are required!');
    }
    if (email.length < 3) {
      throw new Error('Email should be at least 3 characters long!');
    }
    if (password.length < 3) {
      throw new Error('Password should be at least 3 characters long!');
    }
    if (password !== repeatPassword) {
      throw new Error('Passwords don\'t match!');
    }

    await register(email, password);
    form.reset();
    ctx.updateNav();
    ctx.goTo('/');
  } catch (error) {
    alert(error.message);
  }
}