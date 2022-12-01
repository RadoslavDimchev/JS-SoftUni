import { getAllMyListings } from '../api/data.js';
import { html } from '../lib.js';


const myListingsTemplate = (myListings) => html`
<section id="my-listings">
  <h1>My car listings</h1>
  <div class="listings">
    ${myListings.length === 0
    ? html`<p class="no-cars"> You haven't listed any cars yet.</p>`
    : myListings.map(myListingCardTemplate)}
  </div>
</section>`;

const myListingCardTemplate = (myListing) => html`
<div class="listing">
  <div class="preview">
    <img src=${myListing.imageUrl}>
  </div>
  <h2>${myListing.brand} ${myListing.model}</h2>
  <div class="info">
    <div class="data-info">
      <h3>Year: ${myListing.year}</h3>
      <h3>Price: ${myListing.price} $</h3>
    </div>
    <div class="data-buttons">
      <a href=${'/catalog/' + myListing._id} class="button-carDetails">Details</a>
    </div>
  </div>
</div>`;

export async function showMyListings(ctx) {
  const myListings = await getAllMyListings(ctx.userData.id);
  ctx.render(myListingsTemplate(myListings));
}