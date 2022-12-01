import { deleteItem, getById } from '../api/data.js';
import { addLike, getAllLikes, getLike } from '../api/likes.js';
import { html, nothing } from '../lib.js';


const detailsTemplate = (item, isOwner, onDelete, onLike, likes, hasLike, hasUser) => html`
<section id="detailsPage">
  <div id="detailsBox">
    <div class="detailsInfo">
      <h1>Title: ${item.title}</h1>
      <div>
        <img src=${item.imageUrl} />
      </div>
    </div>

    <div class="details">
      <h3>Theater Description</h3>
      <p>${item.description}</p>
      <h4>Date: ${item.date}</h4>
      <h4>Author: ${item.author}</h4>

      ${hasUser && !hasLike
      ? html`
        <div class="buttons">
          ${isOwner 
            ? html`
              <a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
              <a class="btn-edit" href=${'/edit/' + item._id}>Edit</a>`
            : html`<a @click=${onLike} class="btn-like" href="#">Like</a>`}
        </div>`
      : nothing}
      <p class="likes">Likes: ${likes}</p>
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const request = [
    getById(id),
    getAllLikes(id)
  ];
  
  if (ctx.userData) {
    request.push(getLike(id, ctx.userData.id));
  }
  const [item, likes, hasLike] = await Promise.all(request);

  const isOwner = ctx.userData?.id === item._ownerId;

  ctx.render(detailsTemplate(item, isOwner, onDelete, onLike, likes, hasLike, ctx.userData));

  async function onDelete() {
    const choice = confirm('Are you sure you want to delete this item?');
    if (choice) {
      await deleteItem(id);
      ctx.page.redirect('/profile');
    }
  }

  async function onLike() {
    await addLike(id);
    ctx.page.redirect('/catalog/' + id);
  }
}