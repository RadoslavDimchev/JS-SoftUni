import { getAllListingsByQuery } from '../api/data.js';
import { html } from '../lib.js';


const searchTemplate = (onSearch, listings) => html`
<section id="search-cars">
  <h1>Filter by year</h1>

  <div class="container">
    <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
    <button @click=${onSearch} class="button-list">Search</button>
  </div>

  <h2>Results:</h2>
  <div class="listings">
    ${listings.length === 0
      ? html`<p class="no-cars"> No results.</p>`
      : listings.map(listingCardTemplate)}
  </div>
</section>`;

const listingCardTemplate = (listing) => html`
<div class="listing">
  <div class="preview">
    <img src=${listing.imageUrl}>
  </div>
  <h2>${listing.brand} ${listing.model}</h2>
  <div class="info">
    <div class="data-info">
      <h3>Year: ${listing.year}</h3>
      <h3>Price: ${listing.price} $</h3>
    </div>
    <div class="data-buttons">
      <a href=${'/catalog/' + listing._id} class="button-carDetails">Details</a>
    </div>
  </div>
</div>`;

export async function showSearch(ctx) {
  ctx.render(searchTemplate(onSearch, []));

  async function onSearch() {
    const value = document.getElementById('search-input').value;
    if (!value) {
      return alert('Please fill the field!');
    }

    const listings = await getAllListingsByQuery(value);
    ctx.render(searchTemplate(onSearch, listings));
  }
}