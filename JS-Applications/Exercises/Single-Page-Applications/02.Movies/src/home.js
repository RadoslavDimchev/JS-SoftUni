import { detailsView } from './movieDetails.js';
import { showView } from './util.js';


const section = document.getElementById('home-page');
const movieList = document.getElementById('movies-list');

export async function homeView() {
  showView(section);
  dispalyAddBtn();
  const data = await getData();
  displayMovies(data);
}

function dispalyAddBtn() {
  if (sessionStorage.getItem('user')) {
    document.getElementById('add-movie-button').style.display = 'block';
  } else {
    document.getElementById('add-movie-button').style.display = 'none';
  }
}

async function getData() {
  try {
    const response = await fetch('http://localhost:3030/data/movies');

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    return await response.json();
  } catch (error) {
    alert(error.message);
  }
}

function displayMovies(data) {
  movieList.replaceChildren();
  data.map(createMovie).forEach(e => movieList.appendChild(e));
}

function createMovie(movie) {
  const element = document.createElement('div');
  element.className = 'card mb-4';
  element.innerHTML = `
  <img class="card-img-top" src="${movie.img}"
      alt="Card image cap" width="400">
  <div class="card-body">
      <h4 class="card-title">${movie.title}</h4>
  </div>
  <div class="card-footer">
      <a href="#">
          <button type="button" class="btn btn-info">Details</button>
      </a>
  </div>`;

  const detailsSection = element.querySelector('.card-footer');
  if (sessionStorage.getItem('user')) {
    detailsSection.style.display = 'block';
    detailsSection.querySelector('button').addEventListener('click', (ev) => detailsView(ev, movie._id));
  } else {
    detailsSection.style.display = 'none';
  }

  return element;
}