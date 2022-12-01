import { getAllAlbums } from '../api/data.js';
import { html, nothing } from '../lib.js';


const catalogTemplate = (albums, userData) => html`
<section id="catalogPage">
  <h1>All Albums</h1>
  ${albums.length === 0
    ? html`<p>No Albums in Catalog!</p>`
    : albums.map(a => albumCardTemplate(a, userData))}

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

export async function showCatalog(ctx) {
  const albums = await getAllAlbums(ctx.params.id);
  ctx.render(catalogTemplate(albums, ctx.userData));
}