import { html, updateBook } from './api.js';


export const updateFormTemplate = (book, onSuccess) => html`
<form id="edit-form" @submit=${(ev) => onUpdate(ev, onSuccess)}>
  <input type="hidden" name="id" .value=${book._id}>
  <h3>Edit book</h3>
  <label>TITLE</label>
  <input type="text" name="title" placeholder="Title..." .value=${book.title}>
  <label>AUTHOR</label>
  <input type="text" name="author" placeholder="Author..." .value=${book.author}>
  <input type="submit" value="Save">
</form>`;

export function showUpdate(ctx) {
  if (ctx.book === undefined) {
    return null;
  }
  return updateFormTemplate(ctx.book, ctx.update);
}

async function onUpdate(ev, onSuccess) {
  ev.preventDefault();

  const formData = new FormData(ev.target);

  const title = formData.get('title');
  const author = formData.get('author');
  const id = formData.get('id');

  await updateBook({ title, author}, id);

  ev.target.reset();
  onSuccess();
}