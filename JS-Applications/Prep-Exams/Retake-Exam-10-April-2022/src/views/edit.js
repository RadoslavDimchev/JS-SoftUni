import { editPost, getById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (onSubmit, post) => html`
<section id="edit-page" class="auth">
  <form @submit=${onSubmit} id="edit">
    <h1 class="title">Edit Post</h1>

    <article class="input-group">
      <label for="title">Post Title</label>
      <input type="title" name="title" id="title" .value=${post.title}>
    </article>

    <article class="input-group">
      <label for="description">Description of the needs </label>
      <input type="text" name="description" id="description" .value=${post.description}>
    </article>

    <article class="input-group">
      <label for="imageUrl"> Needed materials image </label>
      <input type="text" name="imageUrl" id="imageUrl" .value=${post.imageUrl}>
    </article>

    <article class="input-group">
      <label for="address">Address of the orphanage</label>
      <input type="text" name="address" id="address" .value=${post.address}>
    </article>

    <article class="input-group">
      <label for="phone">Phone number of orphanage employee</label>
      <input type="text" name="phone" id="phone" .value=${post.phone}>
    </article>

    <input type="submit" class="btn submit" value="Edit Post">
  </form>
</section>`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const post = await getById(id);

  ctx.render(editTemplate(createSubmitHandler(onSubmit), post));

  async function onSubmit(data, form) {
    if (Object.values(data).some(e => !e)) {
      return alert('All fields are required!');
    }

    await editPost(id, {
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      address: data.address,
      phone: data.phone
    });
    form.reset();
    ctx.page.redirect('/catalog/' + id);
  }
}