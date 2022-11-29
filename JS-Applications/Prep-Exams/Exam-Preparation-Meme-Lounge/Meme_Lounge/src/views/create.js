import { createMeme, } from '../api/data.js';
import { html } from '../lib.js';
import { showNotification } from '../notify.js';


const createTemplate = (onSubmit) => html`
<section id="create-meme">
  <form id="create-form" @submit=${onSubmit}>
    <div class="container">
      <h1>Create Meme</h1>
      <label for="title">Title</label>
      <input id="title" type="text" placeholder="Enter Title" name="title">
      <label for="description">Description</label>
      <textarea id="description" placeholder="Enter Description" name="description"></textarea>
      <label for="imageUrl">Meme Image</label>
      <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
      <input type="submit" class="registerbtn button" value="Create Meme">
    </div>
  </form>
</section>`;

export async function createView(ctx) {
  ctx.render(createTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const imageUrl = formData.get('imageUrl').trim();

    if (title === '' || description === '' || imageUrl === '') {
      return showNotification('All fields are required!');
    }

    await createMeme({ title, description, imageUrl });
    ctx.page.redirect('/catalog');
  }
}