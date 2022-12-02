import { createApplication, getAllApplciations, getNumberOfApp } from '../api/application.js';
import { deleteItem, getById } from '../api/data.js';
import { html, nothing } from '../lib.js';


const detailsTemplate = (item, isOwner, onDelete, applications, hasApp, hasUser, onApply) => html`
<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${item.imageUrl} alt="example1" />
    <p id="details-title">${item.title}</p>
    <p id="details-category">
      Category: <span id="categories">${item.category}</span>
    </p>
    <p id="details-salary">
      Salary: <span id="salary-number">${item.salary}</span>
    </p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Description</h4>
        <span>${item.description}</span>
      </div>
      <div id="details-requirements">
        <h4>Requirements</h4>
        <span>${item.requirements}</span>
      </div>
    </div>
    <p>Applications: <strong id="applications">${applications}</strong></p>

    ${hasUser && !hasApp
      ? html`
        <div id="action-buttons">
          ${isOwner
            ? html`
              <a href=${'/edit/' + item._id} id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
            : html`
              <a @click=${onApply} href="javascript:void(0)" id="apply-btn">Apply</a>`}
        </div>`
      : nothing}
  </div>
</section>`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const request = [
    getById(id),
    getAllApplciations(id)
  ];
  if(ctx.userData) {
    request.push(getNumberOfApp(id, ctx.userData.id));
  }
  
  const [item, applications, hasApp] = await Promise.all(request);
  const isOwner = ctx.userData?.id === item._ownerId;
  
  ctx.render(detailsTemplate(item, isOwner, onDelete, applications, hasApp, ctx.userData, onApply));

  async function onDelete() {
    const choice = confirm('Are you sure you want to delete this item?');
    if (choice) {
      await deleteItem(id);
      ctx.page.redirect('/catalog');
    }
  }

  async function onApply() {
    await createApplication(id);
    ctx.page.redirect('/catalog/' + id);
  }
}