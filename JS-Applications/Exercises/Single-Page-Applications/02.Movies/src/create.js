import { homeView } from './home.js';
import { showView } from './util.js';


const section = document.getElementById('add-movie');
const submitBtn = section.querySelector('form button');
submitBtn.addEventListener('click', onCreate);
const form = section.querySelector('form');

export async function createView(ev) {
  ev.preventDefault();
  showView(section);
}

async function onCreate(ev) {
  ev.preventDefault();

  const formData = new FormData(form);

  const title = formData.get('title');
  const description = formData.get('description');
  const img = formData.get('img');

  try {
    if (!title || !description || !img) {
      throw new Error('All fields are required!');
    }

    const response = await fetch('http://localhost:3030/data/movies', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': JSON.parse(sessionStorage.getItem('user')).accessToken
      },
      body: JSON.stringify({ title, description, img })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    form.reset();

    homeView();
  } catch (error) {
    alert(error.message);
  }
}