import { editView } from './editView.js';
import { onDelete } from './onDelete.js';
import { showView } from './util.js';

const section = document.getElementById('movie-example');
let userId;

export async function detailsView(event, movieId) {
  event?.preventDefault();

  const response = await fetch('http://localhost:3030/data/movies/' + movieId, {
    headers: {
      'X-Authorization': JSON.parse(sessionStorage.getItem('user')).accessToken
    }
  });
  const movie = await response.json();

  userId = JSON.parse(sessionStorage.getItem('user'))._id;

  section.replaceChildren(await displayMovieDetails(movie));
  if (section.querySelector('.btn-primary')) {
    section.querySelector('.btn-primary').addEventListener('click', (ev) => like(ev, movie));
  }
  showView(section);
}

async function displayMovieDetails(movie) {
  const containerDiv = document.createElement('div');
  containerDiv.className = 'container';
  containerDiv.innerHTML = `
  <div class="row bg-light text-dark">
      <h1>Movie title: ${movie.title}</h1>
      <div class="col-md-8">
        <img
          class="img-thumbnail"
          src="${movie.img}"
          alt="Movie"
        />
      </div>
      <div class="col-md-4 text-center">
        <h3 class="my-3">Movie Description</h3>
          <p>
            ${movie.description}
          </p>
            <a class="btn btn-danger" href="#">Delete</a>
            <a class="btn btn-warning" href="#">Edit</a>
            ${await checkLikes(movie._id)}
      </div>
  </div>`;

  if (userId !== movie._ownerId) {
    containerDiv.querySelector('.btn-danger').style.display = 'none';
    containerDiv.querySelector('.btn-warning').style.display = 'none';
  } else {
    containerDiv.querySelector('.btn-danger').addEventListener('click', (ev) => onDelete(ev, containerDiv, movie));
    containerDiv.querySelector('.btn-warning').addEventListener('click', (ev) => editView(ev, movie));
  }

  return containerDiv;
}

async function checkLikes(movieId) {
  const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`, {
    headers: {
      'X-Authorization': JSON.parse(sessionStorage.getItem('user')).accessToken
    }
  });
  const data = await response.json();
  const isLiked = data.find(obj => obj.movieId === movieId);

  if (isLiked) {
    const likes = await getLikes(movieId);
    return `<span class="enrolled-span">Liked ${likes}</span>`;
  } else {
    return '<a class="btn btn-primary like-btn" href="#">Like</a>';
  }
}

async function like(ev, movie) {
  ev.preventDefault();

  if (userId === movie._ownerId) {
    return;
  }

  const response = await fetch('http://localhost:3030/data/likes', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': JSON.parse(sessionStorage.getItem('user')).accessToken
    },
    body: JSON.stringify({ movieId: movie._id })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  const likes = await getLikes(movie._id);

  const span = document.createElement('span');
  span.className = 'enrolled-span';
  span.textContent = `Liked ${likes}`;
  ev.target.replaceWith(span);
}

async function getLikes(movieId) {
  const res = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`);
  const likes = await res.json();
  return likes;
}