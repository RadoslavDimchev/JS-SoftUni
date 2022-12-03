import { deleteItem, getById } from '../api/data.js';
import { addLike, getAllLikes, getLike } from '../api/likes.js';
import { html, nothing } from '../lib.js';


const detailsTemplate = (item, isOwner, onDelete, likes, hasUser, hasLike, onLike) => html`
<section id="details">
  <div id="details-wrapper">
    <p id="details-title">Album Details</p>
    <div id="img-wrapper">
      <img src=${item.imageUrl} alt="example1" />
    </div>
    <div id="info-wrapper">
      <p><strong>Band:</strong><span id="details-singer">${item.singer}</span></p>
      <p>
        <strong>Album name:</strong><span id="details-album">${item.album}</span>
      </p>
      <p><strong>Release date:</strong><span id="details-release">${item.release}</span></p>
      <p><strong>Label:</strong><span id="details-label">${item.label}</span></p>
      <p><strong>Sales:</strong><span id="details-sales">${item.sales}</span></p>
    </div>
    <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

    ${hasUser && !hasLike
      ? html`
        <div id="action-buttons">
          ${isOwner
            ? html`
              <a href=${'/edit/' + item._id} id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
            : html`<a @click=${onLike} href="#" id="like-btn">Like</a>`}
        </div>`
      : nothing}
  </div>
</section>`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const request = [
    getById(id),
    getAllLikes(id)
  ];
  if(ctx.userData) {
    request.push(getLike(id, ctx.userData.id));
  }
  
  const [item, likes, hasLike] = await Promise.all(request);
  const isOwner = ctx.userData?.id === item._ownerId;

  ctx.render(detailsTemplate(item, isOwner, onDelete, likes, ctx.userData, hasLike, onLike));

  async function onDelete() {
    const choice = confirm('Are you sure you want to delete this item?');
    if (choice) {
      await deleteItem(id);
      ctx.page.redirect('/catalog');
    }
  }

  async function onLike() {
      await addLike(id);
      ctx.page.redirect('/catalog/' + id);
  }
}