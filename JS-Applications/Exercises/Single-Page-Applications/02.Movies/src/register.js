import { checkNavbar, showView } from './util.js';
import { homeView } from './home.js';

const section = document.getElementById('form-sign-up');

const submitBtn = section.querySelector('form button');
submitBtn.addEventListener('click', onRegister);
const form = section.querySelector('form');

export function registerView() {
  showView(section);
}

async function onRegister(ev) {
  ev.preventDefault();

  const formData = new FormData(form);

  const email = formData.get('email');
  const password = formData.get('password');
  const repass = formData.get('repeatPassword');

  try {
    if (!email || !password || !repass) {
      throw new Error('All fields are required!');
    }
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters!');
    }
    if (password !== repass) {
      throw new Error('Passwords don\'t match!');
    }

    const response = await fetch('http://localhost:3030/users/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();

    form.reset();

    sessionStorage.setItem('user', JSON.stringify(data));

    checkNavbar();
    homeView();
  } catch (error) {
    alert(error.message);
  }
}