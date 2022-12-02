import { editItem, getById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';


const editTemplate = (onSubmit, item) => html`
<section id="edit">
  <div class="form">
    <h2>Edit Offer</h2>
    <form @submit=${onSubmit} class="edit-form">
      <input type="text" name="title" id="job-title" placeholder="Title" .value=${item.title} />
      <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" .value=${item.imageUrl} />
      <input type="text" name="category" id="job-category" placeholder="Category" .value=${item.category} />
      <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"
        .value=${item.description}></textarea>
      <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50"
        .value=${item.requirements}></textarea>
      <input type="text" name="salary" id="job-salary" placeholder="Salary" .value=${item.salary} />

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
      title: data.title,
      imageUrl: data.imageUrl,
      category: data.category,
      description: data.description,
      requirements: data.requirements,
      salary: data.salary
    });
    form.reset();
    ctx.page.redirect('/catalog/' + id);
  }
}