import { getMyItems } from '../api/data.js';
import { html } from '../lib.js';


const profileTemplate = (items, userData) => html`
<section id="profilePage">
  <div class="userInfo">
    <div class="avatar">
      <img src="./images/profilePic.png">
    </div>
    <h2>${userData.email}</h2>
  </div>
  <div class="board">
    ${items.length === 0
      ? html`
      <div class="no-events">
        <p>This user has no events yet!</p>
      </div>`
      : items.map(itemTemplate)}    
  </div>
</section>`;

const itemTemplate = (item) => html`
<div class="eventBoard">
  <div class="event-info">
    <img src=${item.imageUrl}>
    <h2>${item.title}</h2>
    <h6>${item.date}</h6>
    <a href=${'/catalog/' + item._id} class="details-button">Details</a>
  </div>
</div>`;

export async function showProfile(ctx) {
  const items = await getMyItems(ctx.userData.id);
  ctx.render(profileTemplate(items, ctx.userData));
}