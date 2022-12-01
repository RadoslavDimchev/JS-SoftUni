import { deleteAlbum, getAlbum } from '../api/data.js';
import { html, nothing } from '../lib.js';


const detailsTemplate = (album, isOwner, onDelete) => html`
<section id="detailsPage">
  <div class="wrapper">
    <div class="albumCover">
      <img src=${album.imgUrl}>
    </div>
    <div class="albumInfo">
      <div class="albumText">
        <h1>Name: ${album.name}</h1>
        <h3>Artist: ${album.artist}</h3>
        <h4>Genre: ${album.genre}</h4>
        <h4>Price: $${album.price}</h4>
        <h4>Date: ${album.release}</h4>
        <p>${album.description}</p>
      </div>

      ${isOwner 
      ? html`
        <div class="actionBtn">
          <a href=${'/edit/' + album._id} class="edit">Edit</a>
          <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
        </div>`
      : nothing}
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  const album = await getAlbum(ctx.params.id);
  const isOwner = ctx.userData.id === album._ownerId;
  ctx.render(detailsTemplate(album, isOwner, onDelete));

  async function onDelete() {
    const choice = confirm('Are you sure you want to delete this album?');
    if(choice) {
      await deleteAlbum(ctx.params.id);
      ctx.page.redirect('/catalog');
    }
  }
}