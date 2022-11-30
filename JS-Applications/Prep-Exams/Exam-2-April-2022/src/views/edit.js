import { editPet, getById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';


const editTemplate = (pet, onSubmit) => html`
<section id="editPage">
  <form @submit=${onSubmit} class="editForm">
    <img src="./images/editpage-dog.jpg">
    <div>
      <h2>Edit PetPal</h2>
      <div class="name">
        <label for="name">Name:</label>
        <input name="name" id="name" type="text" .value=${pet.name}>
      </div>
      <div class="breed">
        <label for="breed">Breed:</label>
        <input name="breed" id="breed" type="text" .value=${pet.breed}>
      </div>
      <div class="Age">
        <label for="age">Age:</label>
        <input name="age" id="age" type="text" .value=${pet.age + ' years'}>
      </div>
      <div class="weight">
        <label for="weight">Weight:</label>
        <input name="weight" id="weight" type="text" .value=${pet.weight + 'kg'}>
      </div>
      <div class="image">
        <label for="image">Image:</label>
        <input name="image" id="image" type="text" .value=${pet.image}>
      </div>
      <button class="btn" type="submit">Edit Pet</button>
    </div>
  </form>
</section>`;

export async function showEdit(ctx) {
  const pet = await getById(ctx.params.id);
  ctx.render(editTemplate(pet, createSubmitHandler(onSubmit)));

  async function onSubmit({ name, breed, age, weight, image }) {
    if (!name || !breed || !age || !weight || !image) {
      return alert('All fileds are required!');
    }

    await editPet(ctx.params.id, { name, breed, age, weight, image });
    ctx.page.redirect('/catalog/' + ctx.params.id);
  }
}