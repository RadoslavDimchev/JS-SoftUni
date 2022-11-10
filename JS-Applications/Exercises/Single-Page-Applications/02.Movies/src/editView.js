import { onEdit } from './edit.js';
import { showView } from './util.js';


const section = document.getElementById('edit-movie');
const form = section.querySelector('form');
const submitBtn = section.querySelector('form button');

export async function editView(ev, movie) {
  ev.preventDefault();

  showView(section);
  submitBtn.addEventListener('click', (event) => onEdit(event, form));
  form.querySelector('#title').value = movie.title;
  form.querySelector('textarea').value = movie.description;
  form.querySelector('#imageUrl').value = movie.img;
  form.id = movie._id;
}