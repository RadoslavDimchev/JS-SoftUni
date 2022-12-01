import { editItem, getById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';


const editTemplate = (onSubmit, item) => html`
<section id="editPage">
  <form @submit=${onSubmit} class="theater-form">
    <h1>Edit Theater</h1>
    <div>
      <label for="title">Title:</label>
      <input id="title" name="title" type="text" placeholder="Theater name" .value=${item.title}>
    </div>
    <div>
      <label for="date">Date:</label>
      <input id="date" name="date" type="text" placeholder="Month Day, Year" .value=${item.date}>
    </div>
    <div>
      <label for="author">Author:</label>
      <input id="author" name="author" type="text" placeholder="Author" .value=${item.author}>
    </div>
    <div>
      <label for="description">Theater Description:</label>
      <textarea id="description" name="description" placeholder="Description" .value=${item.description}></textarea>
    </div>
    <div>
      <label for="imageUrl">Image url:</label>
      <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" .value=${item.imageUrl}>
    </div>
    <button class="btn" type="submit">Submit</button>
  </form>
</section>`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const item = await getById(id);

  ctx.render(editTemplate(createSubmitHandler(onSubmit), item));

  async function onSubmit(data, form) {
    if (Object.values(data).some(e => !e)) {
      return alert('All fields are required!');
    }

    await editItem(id, {
      title: data.title,
      date: data.date,
      author: data.author,
      imageUrl: data.imageUrl,
      description: data.description
    });
    form.reset();
    ctx.page.redirect('/catalog/' + id);
  }
}