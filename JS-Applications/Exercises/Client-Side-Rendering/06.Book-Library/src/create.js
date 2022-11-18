import { createBook, html } from './api.js';


const createFormTemplate = (ctx) => html`
<form id="add-form" @submit=${(ev) => onCreate(ev, ctx)}>
  <h3>Add book</h3>
  <label>TITLE</label>
  <input type="text" name="title" placeholder="Title...">
  <label>AUTHOR</label>
  <input type="text" name="author" placeholder="Author...">
  <input type="submit" value="Submit">
</form>`;

export function showCreate(ctx) {
  if (ctx.book !== undefined) {
    return null;
  }
  return createFormTemplate(ctx);
}

async function onCreate(ev,ctx) {
  ev.preventDefault();

  const formData = new FormData(ev.target);

  const title = formData.get('title');
  const author = formData.get('author');

  if(!title || !author) {
    return;
  }

  await createBook({ title, author });

  ev.target.reset();
  ctx.update();
}