import { createComment, getAllComments } from '../api/comments.js';
import { deleteItem, getById } from '../api/data.js';
import { html, nothing } from '../lib.js';
import { createSubmitHandler } from '../util.js';


const detailsTemplate = (game, isOwner, onDelete, hasUser, comments, onComment) => html`
<section id="game-details">
  <h1>Game Details</h1>
  <div class="info-section">

    <div class="game-header">
      <img class="game-img" src=${game.imageUrl} />
      <h1>${game.title}</h1>
      <span class="levels">MaxLevel: ${game.maxLevel}</span>
      <p class="type">${game.category}</p>
    </div>

    <p class="text">${game.summary}</p>

    <!-- Bonus ( for Guests and Users ) -->
    <div class="details-comments">
      <h2>Comments:</h2>
      ${comments.length === 0
        ? html`<p class="no-comment">No comments.</p>`
        : html`<ul>${comments.map(commentTemplate)}</ul>`}
    </div>

    <!-- Edit/Delete buttons ( Only for creator of this game )  -->
    ${isOwner 
      ? html`
      <div class="buttons">
        <a href=${'/edit/' + game._id} class="button">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
      </div>`
      : nothing}
  </div>

  <!-- Bonus -->
  <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
  ${!isOwner && hasUser 
    ? html`
      <article class="create-comment">
      <label>Add new comment:</label>
      <form @submit=${onComment} class="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input class="btn submit" type="submit" value="Add Comment">
      </form>
      </article>`
    : nothing}

</section>`;

const commentTemplate = (comment) => html`
<li class="comment">
  <p>Content: ${comment.comment}</p>
</li>`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const [item, comments] = await Promise.all([
    getById(id),
    getAllComments(id)
  ]);
  const isOwner = ctx.userData?.id === item._ownerId;
  
  ctx.render(detailsTemplate(item, isOwner, onDelete, ctx.userData, comments, createSubmitHandler(onComment)));

  async function onDelete() {
    const choice = confirm('Are you sure you want to delete this game?');
    if (choice) {
      await deleteItem(id);
      ctx.page.redirect('/');
    }
  }

  async function onComment({comment}, form) {
    if (!comment) {
      return alert('Please fill the field!');
    }

    await createComment(id, comment);
    form.reset();
    ctx.page.redirect('/catalog/' + id);
  }
}