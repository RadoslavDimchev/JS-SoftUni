import {  getAllMyBooks } from '../api/data.js';
import { html } from '../lib.js';


const myBooksTemplate = (myBooks) => html`
<section id="my-books-page" class="my-books">
  <h1>My Books</h1>
  ${myBooks.length === 0
      ? html` 
        <p class="no-books">No books in database!</p>`
      : html`
        <ul class="my-books-list">
          ${myBooks.map(bookCardTemplate)}
        </ul>`}
</section>`;

const bookCardTemplate = (book) => html`
<li class="otherBooks">
  <h3>${book.title}</h3>
  <p>Type: ${book.type}</p>
  <p class="img"><img src=${book.imageUrl}></p>
  <a class="button" href=${'/catalog/' + book._id}>Details</a>
</li>`;

export async function showMyBooks(ctx) {
  const myBooks = await getAllMyBooks(ctx.userData.id);
  ctx.render(myBooksTemplate(myBooks));
}