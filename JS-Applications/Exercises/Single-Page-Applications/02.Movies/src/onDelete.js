import { homeView } from './home.js';

export async function onDelete(ev, containerDiv, movie) {
  ev.preventDefault();
  containerDiv.remove();

  await fetch('http://localhost:3030/data/movies/' + movie._id, {
    method: 'delete',
    headers: {
      'X-Authorization': JSON.parse(sessionStorage.getItem('user')).accessToken
    }
  });

  homeView();
}