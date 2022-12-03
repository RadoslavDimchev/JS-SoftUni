import { editItem, getById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';


const editTemplate = (onSubmit, item) => html`
<section id="edit">
  <div class="form">
    <h2>Edit Album</h2>
    <form @submit=${onSubmit} class="edit-form">
      <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${item.singer} />
      <input type="text" name="album" id="album-album" placeholder="Album" .value=${item.album} />
      <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${item.imageUrl} />
      <input type="text" name="release" id="album-release" placeholder="Release date" .value=${item.release} />
      <input type="text" name="label" id="album-label" placeholder="Label" .value=${item.label} />
      <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${item.sales} />

      <button type="submit">post</button>
    </form>
  </div>
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
      singer: data.singer,
      album: data.album,
      imageUrl: data.imageUrl,
      release: data.release,
      label: data.label,
      sales: data.sales
    });
    form.reset();
    ctx.page.redirect('/catalog/' + id);
  }
}