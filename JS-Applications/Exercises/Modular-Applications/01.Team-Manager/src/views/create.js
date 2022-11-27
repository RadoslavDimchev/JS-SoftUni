import { approveMember, becomeMember, createItem } from '../api/data.js';
import { html, nothing } from '../lib.js';
import { createSubmitHendler, getUserData } from '../util.js';


const createTemplate = (onSubmit, error) => html`
<article class="narrow">
  <header class="pad-med">
    <h1>New Team</h1>
  </header>
  <form id="create-form" class="main-form pad-large" @submit=${onSubmit}>
    ${error ? html`<div class="error">${error}</div>` : nothing}
    <label>Team name: <input type="text" name="name"></label>
    <label>Logo URL: <input type="text" name="logoUrl"></label>
    <label>Description: <textarea name="description"></textarea></label>
    <input class="action cta" type="submit" value="Create Team">
  </form>
</article>`;

export function showCreate(ctx) {
  update('');

  function update(error) {
    ctx.render(createTemplate(createSubmitHendler(onSubmit, 'name', 'logoUrl', 'description'), error));
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

      const userData = getUserData();

      const newItem = await createItem({
        name: data.name,
        logoUrl: data.logoUrl,
        description: data.description,
        _ownerId: userData.id
      });

      const membership = await becomeMember({ teamId: newItem._id });
      membership.status = 'member';
      approveMember(membership._id, membership);

      ctx.page.redirect('/catalog/' + newItem._id);
    } catch (error) {
      update(error.message);
    }
  }
}