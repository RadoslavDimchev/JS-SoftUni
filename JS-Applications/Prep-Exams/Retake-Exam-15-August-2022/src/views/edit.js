import { editItem, getById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';


const editTemplate = (onSubmit, item) => html`
<section id="edit">
  <div class="form">
    <h2>Edit item</h2>
    <form @submit=${onSubmit} class="edit-form">
      <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${item.brand} />
      <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${item.model} />
      <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${item.imageUrl} />
      <input type="text" name="release" id="shoe-release" placeholder="Release date" .value=${item.release} />
      <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value=${item.designer} />
      <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${item.value} />

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
      brand: data.brand,
      model: data.model,
      imageUrl: data.imageUrl,
      release: data.release,
      designer: data.designer,
      value: data.value
    });
    form.reset();
    ctx.page.redirect('/catalog/' + id);
  }
}