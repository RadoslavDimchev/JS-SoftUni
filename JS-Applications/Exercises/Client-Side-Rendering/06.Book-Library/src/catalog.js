import { deleteBook, getAllBooks, html } from './api.js';


const tableTemplate = (ctx) => html`
<button id="loadBooks" @click=${() => loadAllBooks(ctx)}>LOAD ALL BOOKS</button>
<table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    ${ctx.books ? Object.values(ctx.books).map(b => trTemplate(b, ctx)) : ''}
  </tbody>
</table>`;

const trTemplate = (book, ctx) => html`
<tr>
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>
    <button @click=${() => onEdit(book, ctx)}>Edit</button>
    <button @click=${() => onDelete(book, ctx)}>Delete</button>
  </td>
</tr>`;

async function loadAllBooks(ctx) {
  let books = await getAllBooks();
  books = Object.entries(books).map(([k, v]) => Object.assign(v, { _id: k }));
  ctx.books = books;
  ctx.update();
}

export function showCatalog(ctx) {
  return tableTemplate(ctx);
}

async function onEdit(book, ctx) {
  ctx.book = book;
  ctx.update();
}

async function onDelete(book, ctx) {
  await deleteBook(book._id);
  ctx.update();
}