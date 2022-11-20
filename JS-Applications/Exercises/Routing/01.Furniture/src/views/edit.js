import { getDetails, updateFurniture } from '../api/data.js';
import { html } from '../lib.js';


const editTemplate = (furniture, onSubmit, errorMessage, errors) => html`
        <div class="row space-top">
          <div class="col-md-12">
            <h1>Edit Furniture</h1>
            <p>Please fill all fields.</p>
          </div>
        </div>
        <form @submit=${onSubmit}>
          <div class="row space-top">
            <div class="col-md-4">
              ${errorMessage ? html`<div class="error">${errorMessage}</div>` : null}
              <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class=${'form-control' + (errors.make ? ' is-invalid' : '')} id="new-make" type="text" name="make"
                  .value=${furniture.make}>
              </div>
              <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class=${'form-control' + (errors.model ? ' is-invalid' : '')} id="new-model" type="text" name="model"
                  .value=${furniture.model}>
              </div>
              <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class=${'form-control' + (errors.year ? ' is-invalid' : '')} id="new-year" type="number" name="year"
                  .value=${furniture.year}>
              </div>
              <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class=${'form-control' + (errors.description ? ' is-invalid' : '')} id="new-description" type="text"
                  name="description" .value=${furniture.description}>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class=${'form-control' + (errors.price ? ' is-invalid' : '')} id="new-price" type="number" name="price"
                  .value=${furniture.price}>
              </div>
              <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class=${'form-control' + (errors.img ? ' is-invalid' : '')} id="new-image" type="text" name="img"
                  .value=${furniture.img}>
              </div>
              <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" .value=${furniture.material}>
              </div>
              <input type="submit" class="btn btn-info" value="Edit" />
            </div>
          </div>
        </form>`;

export async function editView(ctx) {
  update(null, {});

  async function update(errorMessage, errors) {
    const furniture = await getDetails(ctx.params.id);
    ctx.render(editTemplate(furniture, onSubmit, errorMessage, errors));
  }

  async function onSubmit(event) {
    event.preventDefault();

    const formData = [...new FormData(event.target)];
    const data = formData.reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});
    const missing = formData.filter(([k, v]) => k !== 'material' && v === '');

    try {
      if (missing.length > 0) {
        const errors = missing.reduce((a, [k]) => Object.assign(a, { [k]: true }), {});
        throw {
          error: new Error('All fields are required!'),
          errors
        };
      }
      data.year = Number(data.year);
      data.price = Number(data.price);

      if (data.make.length < 4 || data.model.length < 4) {
        throw {
          error: new Error('At least 4 symbols long!'),
          errors: {
            make: data.make.length < 4,
            model: data.model.length < 4
          }
        };
      }
      if (data.year < 1950 || data.year > 2050) {
        throw {
          error: new Error('Year must be between 1950 and 2050!'),
          errors: {
            year: data.year < 1950 || data.year > 2050
          }
        };
      }
      if (data.description.length <= 10) {
        throw {
          error: new Error('Description must be more than 10 symbols!'),
          errors: {
            description: data.description.length <= 10
          }
        };
      }
      if (Number.isInteger(data.price) === false || data.price < 0) {
        throw {
          error: new Error('Price must be a positive number!'),
          errors: {
            price: Number.isInteger(data.price) === false || data.price < 0
          }
        };
      }

      await updateFurniture(ctx.params.id, data);
      ctx.page.redirect('/');
    } catch (error) {
      const message = error.message || error.error.message;
      update(message, error.errors || {});
    }
  }
}