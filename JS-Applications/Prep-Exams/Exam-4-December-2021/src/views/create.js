import { createAlbum } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';


const createTemplate = (onSubmit) => html`
<section class="createPage">
  <form @submit=${onSubmit}>
    <fieldset>
      <legend>Add Album</legend>

      <div class="container">
        <label for="name" class="vhide">Album name</label>
        <input id="name" name="name" class="name" type="text" placeholder="Album name">

        <label for="imgUrl" class="vhide">Image Url</label>
        <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" placeholder="Image Url">

        <label for="price" class="vhide">Price</label>
        <input id="price" name="price" class="price" type="text" placeholder="Price">

        <label for="releaseDate" class="vhide">Release date</label>
        <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" placeholder="Release date">

        <label for="artist" class="vhide">Artist</label>
        <input id="artist" name="artist" class="artist" type="text" placeholder="Artist">

        <label for="genre" class="vhide">Genre</label>
        <input id="genre" name="genre" class="genre" type="text" placeholder="Genre">

        <label for="description" class="vhide">Description</label>
        <textarea name="description" class="description" placeholder="Description"></textarea>

        <button class="add-album" type="submit">Add New Album</button>
      </div>
    </fieldset>
  </form>
</section>`;

export async function showCreate(ctx) {
  ctx.render(createTemplate(createSubmitHandler(onSubmit)));

  async function onSubmit(data, form) {
    if (Object.values(data).some(e => !e)) {
      return alert('All fields are required!');
    }

    await createAlbum(data);
    form.reset();
    ctx.page.redirect('/catalog');
  }
}