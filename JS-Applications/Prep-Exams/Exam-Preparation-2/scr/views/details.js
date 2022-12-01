import { deleteListing, getListing } from '../api/data.js';
import { html, nothing } from '../lib.js';


const detailsTemplate = (listing, isOwner, onDelete) => html`
<section id="listing-details">
  <h1>Details</h1>
  <div class="details-info">
    <img src=${listing.imageUrl}>
    <hr>
    <ul class="listing-props">
      <li><span>Brand:</span>${listing.brand}</li>
      <li><span>Model:</span>${listing.model}</li>
      <li><span>Year:</span>${listing.year}</li>
      <li><span>Price:</span>${listing.price}$</li>
    </ul>

    <p class="description-para">${listing.description}</p>

    ${isOwner 
      ? html`
        <div class="listings-buttons">
          <a href=${'/edit/' + listing._id} class="button-list">Edit</a>
          <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
        </div>`
      : nothing}
    
  </div>
</section>`;

export async function showDetails(ctx) {
  const listing = await getListing(ctx.params.id);
  const isOwner = ctx.userData?.id === listing._ownerId;
  ctx.render(detailsTemplate(listing, isOwner, onDelete));

  async function onDelete() {
    const choice = confirm('Are you sure you want to delete this listing?');
    if(choice) {
      await deleteListing(ctx.params.id);
      ctx.page.redirect('/catalog');
    }
  }
}