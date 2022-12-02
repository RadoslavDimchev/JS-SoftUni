import { getAllByQuery } from '../api/data.js';
import { html, nothing } from '../lib.js';
import { createSubmitHandler } from '../util.js';


const searchTemplate = (onSearch, items, hasUser) => html`
<section id="search">
  <h2>Search by Brand</h2>

  <form @submit=${onSearch} class="search-wrapper cf">
    <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
    <button type="submit">Search</button>
  </form>

  <h3>Results:</h3>

  <div id="search-container">
    ${items.length === 0
      ? html`<h2>There are no results found.</h2>`
      : html`<ul class="card-wrapper">${items.map(i => itemTemplate(i, hasUser))}</ul>`}
  </div>
</section>`;

const itemTemplate = (item, hasUser) => html`
<li class="card">
  <img src=${item.imageUrl} alt="travis" />
  <p>
    <strong>Brand: </strong><span class="brand">${item.brand}</span>
  </p>
  <p>
    <strong>Model: </strong><span class="model">${item.model}</span>
  </p>
  <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
  ${hasUser ? html`<a class="details-btn" href=${'/catalog/' + item._id}>Details</a>` : nothing}

</li>`;

export async function showSearch(ctx) {
  ctx.render(searchTemplate(createSubmitHandler(onSearch), []));

  async function onSearch({search}, form) {
    if(!search) {
      return alert('Please fill the field!');
    }
    const items = await getAllByQuery(search);
    
    form.reset();
    ctx.render(searchTemplate(createSubmitHandler(onSearch), items, ctx.userData));
  }
}