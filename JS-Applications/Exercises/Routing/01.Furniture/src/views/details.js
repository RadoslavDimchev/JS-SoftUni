import { deleteFurniture, getDetails } from '../api/data.js';
import { html, until } from '../lib.js';
import { getUserData } from '../util.js';


const deatailsTemplate = (furniturePromise) => html`
<div class="row space-top">
  <div class="col-md-12">
    <h1>Furniture Details</h1>
  </div>
</div>
<div class="row space-top">
  ${until(furniturePromise, html`<p>Loading &hellip;</p>`)}
</div>`;

const furnitureTemplate = (furniture, isOwner, onDelete) => html`
  <div class="col-md-4">
    <div class="card text-white bg-primary">
      <div class="card-body">
        <img src=${furniture.img} />
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <p>Make: <span>${furniture.make}</span></p>
    <p>Model: <span>${furniture.model}</span></p>
    <p>Year: <span>${furniture.year}</span></p>
    <p>Description: <span>${furniture.description}</span></p>
    <p>Price: <span>${furniture.price}</span></p>
    <p>Material: <span>${furniture.material}</span></p>
    ${isOwner 
      ? html` 
      <div>
        <a href="/edit/${furniture._id}" class="btn btn-info">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" class="btn btn-red">Delete</a>
      </div>` 
    : null}
  </div>`;

export async function detailsView(ctx) {
  ctx.render(deatailsTemplate(loadFurniture(ctx.params.id, onDelete)));

  async function onDelete() {
    const choice = confirm('Are you sure you want to delete this furniture?');
    if(choice) {
      await deleteFurniture(ctx.params.id);
      ctx.page.redirect('/');
    }
  }
}

async function loadFurniture(id, onDelete) {
  const furniture = await getDetails(id);

  const userData = getUserData();
  let isOwner = false;
  if(userData) {
    isOwner = userData.id === furniture._ownerId;
  }
  
  return furnitureTemplate(furniture, isOwner, onDelete);
}