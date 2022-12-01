import { getAllAlbumsByQuery } from '../api/data.js';
import { html, nothing } from '../lib.js';


const searchTemplate = (onSearch, albums, userData) => html`
${albums}
<section id="searchPage">
  <h1>Search by Name</h1>

  <div class="search">
    <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
    <button @click=${onSearch} class="button-list">Search</button>
  </div>

  <h2>Results:</h2>

  <div class="search-result">
    ${albums.length === 0
    ? html`<p class="no-result">No result.</p>`
    : albums.map(a => albumCardTemplate(a, userData))}
  </div>
</section>`;

const albumCardTemplate = (album, userData) => html`
<div class="card-box">
  <img src=${album.imgUrl}>
  <div>
    <div class="text-center">
      <p class="name">Name: ${album.name}</p>
      <p class="artist">Artist: ${album.artist}</p>
      <p class="genre">Genre: ${album.genre}</p>
      <p class="price">Price: $${album.price}</p>
      <p class="date">Release Date: ${album.releaseDate}</p>
    </div>
    ${userData 
    ? html`
        <div class="btn-group">
          <a href=${'/catalog/' + album._id} id="details">Details</a>
        </div>`
    : nothing}
  </div>
</div>`;

export function showSearch(ctx) {
  ctx.render(searchTemplate(onSearch, []));

  async function onSearch() {
    const value = document.getElementById('search-input').value;

    if (value === undefined) {
      return alert('Please fill the field!');
    }

    const albums = await getAllAlbumsByQuery(value);
    ctx.render(searchTemplate(onSearch, albums, ctx.userData));
  }
}