import { deletePet, getById } from '../api/data.js';
import { addDonation, getAllDonations, getDonation } from '../api/donations.js';
import { html, nothing } from '../lib.js';
import { getUserData } from '../util.js';


const detailsTemplate = (pet, hasUser, isOwner, onDelete, onDonate, donations, hasDonation) => html`
<section id="detailsPage">
  <div class="details">
    <div class="animalPic">
      <img src=${pet.image}>
    </div>
    <div>
      <div class="animalInfo">
        <h1>Name: ${pet.name}</h1>
        <h3>Breed: ${pet.breed}</h3>
        <h4>Age: ${pet.age} years</h4>
        <h4>Weight: ${pet.weight}kg</h4>
        <h4 class="donation">Donation: ${donations}$</h4>
      </div>
      ${hasUser && !hasDonation
    ? html`
      <div class="actionBtn">
        ${isOwner
          ? html`
            <a href=${'/edit/' + pet._id} class="edit">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>`
          : html`
            <a @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>`}
      </div>`
    : nothing}
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const userData = getUserData();

  const request = [
    getById(id),
    getAllDonations(id)
  ];

  if (userData) {
    request.push(getDonation(id, userData.id));
  }
  
  const [pet, donations, hasDonation] = await Promise.all(request);

  const isOwner = userData?.id === pet._ownerId;

  ctx.render(detailsTemplate(pet, userData, isOwner, onDelete, onDonate, donations * 100, hasDonation));

  async function onDelete() {
    const choice = confirm('Are you sure you want to delete this pet?');
    if (choice) {
      await deletePet(id);
      ctx.page.redirect('/');
    }
  }

  async function onDonate() {
    await addDonation(id);
    ctx.page.redirect('/catalog/' + id);
  }
}