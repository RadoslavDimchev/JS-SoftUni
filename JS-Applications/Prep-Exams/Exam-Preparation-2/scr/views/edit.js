import { editListing, getListing } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';


const editTemplate = (onSubmit, listing) => html`
<section id="edit-listing">
  <div class="container">

    <form @submit=${onSubmit} id="edit-form">
      <h1>Edit Car Listing</h1>
      <p>Please fill in this form to edit an listing.</p>
      <hr>

      <p>Car Brand</p>
      <input type="text" placeholder="Enter Car Brand" name="brand" .value=${listing.brand}>

      <p>Car Model</p>
      <input type="text" placeholder="Enter Car Model" name="model" .value=${listing.model}>

      <p>Description</p>
      <input type="text" placeholder="Enter Description" name="description" .value=${listing.description}>

      <p>Car Year</p>
      <input type="number" placeholder="Enter Car Year" name="year" .value=${listing.year}>

      <p>Car Image</p>
      <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${listing.imageUrl}>

      <p>Car Price</p>
      <input type="number" placeholder="Enter Car Price" name="price" .value=${listing.price}>

      <hr>
      <input type="submit" class="registerbtn" value="Edit Listing">
    </form>
  </div>
</section>
`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const listing = await getListing(id);
  ctx.render(editTemplate(createSubmitHandler(onSubmit), listing));

  async function onSubmit(data, form) {
    if (Object.values(data).some(e => !e)) {
      return alert('All fields are required!');
    }

    await editListing(id, {
      brand: data.brand,
      model: data.model,
      description: data.description,
      year: Number(data.year),
      imageUrl: data.imageUrl,
      price: Number(data.price)
    });
    form.reset();
    ctx.page.redirect('/catalog/' + id);
  }
}