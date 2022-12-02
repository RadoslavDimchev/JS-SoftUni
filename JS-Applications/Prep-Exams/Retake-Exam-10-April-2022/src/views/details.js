import { deletePost, getById } from '../api/data.js';
import { createDonation, getAllDonations, getDonation } from '../api/donations.js';
import { html, nothing } from '../lib.js';


const detailsTemplate = (post, isOwner, onDelete, hasUser, donations, hasDonation, onDonate) => html`
<section id="details-page">
  <h1 class="title">Post Details</h1>

  <div id="container">
    <div id="details">
      <div class="image-wrapper">
        <img src=${post.imageUrl} alt="Material Image" class="post-image">
      </div>
      <div class="info">
        <h2 class="title post-title">${post.title}</h2>
        <p class="post-description">Description: ${post.description}</p>
        <p class="post-address">Address: ${post.address}</p>
        <p class="post-number">Phone number: ${post.phone}</p>
        <p class="donate-Item">Donate Materials: ${donations}</p>

        ${hasUser && !hasDonation
          ? html`
              <div class="btns">
                ${isOwner
                  ? html`
                    <a href=${'/edit/' + post._id} class="edit-btn btn">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>`
                  : html`<a @click=${onDonate} href="#" class="donate-btn btn">Donate</a>`}
              </div>`
          : nothing}
      </div>
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const request = [
    getById(id),
    getAllDonations(id)
  ];
  if(ctx.userData) {
    request.push(getDonation(id, ctx.userData.id));
  }
  
  const [post, donations, hasDonation] = await Promise.all(request);
  const isOwner = ctx?.userData.id === post._ownerId;
  
  ctx.render(detailsTemplate(post, isOwner, onDelete, ctx.userData, donations, hasDonation, onDonate));

  async function onDelete() {
    const choice = confirm('Are you sure you want to delete this post?');
    if(choice) {
      await deletePost(id);
      ctx.page.redirect('/catalog');
    }
  }

  async function onDonate() {
      await createDonation(id);
      ctx.page.redirect('/catalog/' + id);
  }
}