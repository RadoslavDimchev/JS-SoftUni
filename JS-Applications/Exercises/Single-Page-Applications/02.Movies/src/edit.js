import { detailsView } from './movieDetails.js';

export async function onEdit(ev, form) {
  ev.preventDefault();

  const formData = new FormData(form);

  const title = formData.get('title');
  const description = formData.get('description');
  const img = formData.get('img');

  try {
    if (!title || !description || !img) {
      throw new Error('All fields are required!');
    }

    const response = await fetch('http://localhost:3030/data/movies/' + form.id, {
      method: 'put',
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

    detailsView(null, form.id);
  } catch (error) {
    alert(error.message);
  }
}