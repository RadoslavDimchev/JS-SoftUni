import { editItem, getById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';


const editTemplate = (onSubmit, game) => html`
<section id="edit-page" class="auth">
  <form @submit=${onSubmit} id="edit">
    <div class="container">

      <h1>Edit Game</h1>
      <label for="leg-title">Legendary title:</label>
      <input type="text" id="title" name="title" .value=${game.title}>

      <label for="category">Category:</label>
      <input type="text" id="category" name="category" .value=${game.category}>

      <label for="levels">MaxLevel:</label>
      <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${game.maxLevel}>

      <label for="game-img">Image:</label>
      <input type="text" id="imageUrl" name="imageUrl" .value=${game.imageUrl}>

      <label for="summary">Summary:</label>
      <textarea name="summary" id="summary" .value=${game.summary}></textarea>
      <input class="btn submit" type="submit" value="Edit Game">

    </div>
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
      category: data.category,
      maxLevel: data.maxLevel,
      imageUrl: data.imageUrl,
      summary: data.summary
    });
    form.reset();
    ctx.page.redirect('/catalog/' + id);
  }
}