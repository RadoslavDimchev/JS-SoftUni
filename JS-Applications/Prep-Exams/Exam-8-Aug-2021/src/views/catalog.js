import { getAll } from '../api/data.js';
import { html } from '../lib.js';


const catalogTemplate = (books) => html`
<section id="dashboard-page" class="dashboard">
  <h1>Dashboard</h1>
  ${books.length === 0
    ? html`<p class="no-books">No books in database!</p>`
    : html`
  <ul class="other-books-list">
    ${books.map(bookCardTemplate)}
  </ul>`}
</section>`;

const bookCardTemplate = (book) => html`
<li class="otherBooks">
  <h3>${book.title}</h3>
  <p>Type: ${book.type}</p>
  <p class="img"><img src=${book.imageUrl}></p>
  <a class="button" href=${'/catalog/' + book._id}>Details</a>
</li>`;

export async function showCatalog(ctx) {
  const books = await getAll();
  ctx.render(catalogTemplate(books));
}