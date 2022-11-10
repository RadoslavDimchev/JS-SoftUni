import { checkNavbar, showView } from './util.js';
import { homeView } from './home.js';


const section = document.getElementById('form-login');

export async function loginView() {
  showView(section);
}

const submitBtn = section.querySelector('form button');
submitBtn.addEventListener('click', onLogin);
const form = section.querySelector('form');

async function onLogin(ev) {
  ev.preventDefault();

  const formData = new FormData(form);

  const email = formData.get('email');
  const password = formData.get('password');

  try {
    if (!email || !password) {
      throw new Error('All fields are required!');
    }

    const response = await fetch('http://localhost:3030/users/login', {
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