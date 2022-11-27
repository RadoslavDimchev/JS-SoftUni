import { editItem, getItemById } from '../api/data.js';
import { html, nothing } from '../lib.js';
import { createSubmitHendler } from '../util.js';


const editTemplate = (onSubmit, error, item) => html`
<article class="narrow">
  <header class="pad-med">
    <h1>Edit Team</h1>
  </header>
  <form id="edit-form" class="main-form pad-large" @submit=${onSubmit}>
    ${error ? html`<div class="error">${error}</div>` : nothing}
    <label>Team name: <input type="text" name="name" .value=${item.name}></label>
    <label>Logo URL: <input type="text" name="logoUrl" .value=${item.logoUrl}></label>
    <label>Description: <textarea name="description" .value=${item.description}></textarea></label>
    <input class="action cta" type="submit" value="Save Changes">
  </form>
</article>`;

export async function showEdit(ctx) {
  const item = await getItemById(ctx.params.id);

  update('', item);

  function update(error, item) {
    ctx.render(editTemplate(createSubmitHendler(onSubmit, 'name', 'logoUrl', 'description'), error, item));
  }

  async function onSubmit(data) {
    try {
      if (!data.name || !data.logoUrl || !data.description) {
        throw new Error('All fields are required!');
      }
      if (data.name.length < 4) {
        throw new Error('Name must be at least 4 characters!');
      }
      if (data.description.length < 10) {
        throw new Error('Description must be at least 10 characters!');
      }

      const editedItem = await editItem(ctx.params.id, {
        name: data.name,
        logoUrl: data.logoUrl,
        description: data.description
      });

      ctx.page.redirect('/catalog/' + editedItem._id);
    } catch (error) {
      update(error.message, item);
    }
  }
}