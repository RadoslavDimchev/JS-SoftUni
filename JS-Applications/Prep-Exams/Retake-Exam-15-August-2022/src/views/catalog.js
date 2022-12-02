import { getAll } from '../api/data.js';
import { html } from '../lib.js';


const catalogTemplate = (items) => html`
<section id="dashboard">
  <h2>Collectibles</h2>
  ${items.length === 0
    ? html`<h2>There are no items added yet.</h2>`
    : html`<ul class="card-wrapper">${items.map(itemTemplate)}</ul>`}
</section>`;

const itemTemplate = (item) => html`
<li class="card">
  <img src=${item.imageUrl} alt="back2future" />
  <p><strong>Brand: </strong><span class="brand">${item.brand}</span></p>
  <p>
    <strong>Model: </strong><span class="model">${item.model}</span>
  </p>
  <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
  <a class="details-btn" href=${'/catalog/' + item._id}>Details</a>
</li>`;

export async function showCatalog(ctx) {
  const items = await getAll();
  ctx.render(catalogTemplate(items));
}