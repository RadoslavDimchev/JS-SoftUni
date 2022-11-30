import { deleteBook, getById } from '../api/data.js';
import { getAllLikes, getLike, likeBook } from '../api/likes.js';
import { html, nothing } from '../lib.js';


const detailsTemplate = (book, hasUser, isOwner, onDelete, onLike, likes, hasLike) => html`
<section id="details-page" class="details">
  <div class="book-information">
    <h3>${book.title}</h3>
    <p class="type">Type: ${book.type}</p>
    <p class="img"><img src=${book.image}></p>
    <div class="actions">
      <!-- Edit/Delete buttons ( Only for creator of this book )  -->
      ${isOwner
        ? html`
          <a class="button" href=${'/edit/' + book._id}>Edit</a>
          <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
        : nothing}

      <!-- Bonus -->
      <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
      ${!isOwner && hasUser && !hasLike 
        ? html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`
        : nothing}

      <!-- ( for Guests and Users )  -->
      <div class="likes">
        <img class="hearts" src="/images/heart.png">
        <span id="total-likes">Likes: ${likes}</span>
      </div>
      <!-- Bonus -->
    </div>
  </div>
  <div class="book-description">
    <h3>Description:</h3>
    <p>${book.description}</p>
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

  const [book, likes, hasLike] = await Promise.all(request);

  const isOwner = ctx.userData?.id === book._ownerId;

  ctx.render(detailsTemplate(book, ctx.userData, isOwner, onDelete, onLike, likes, hasLike));

  async function onDelete() {
    const choice = confirm('Are you sure you want to delete this book?');
    if (choice) {
      await deleteBook(id);
      ctx.page.redirect('/catalog');
    }
  }

  async function onLike() {
    await likeBook(id);
    ctx.page.redirect('/catalog/' + id);
  }
}