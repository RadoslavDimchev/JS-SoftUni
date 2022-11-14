import { deleteById, getById } from '../api/data.js';


const section = document.getElementById('detailsPage');

export async function showDetails(ctx, id) {
  const idea = await getById(id);
  ctx.showSection(section);

  const user = JSON.parse(sessionStorage.getItem('user'));
  const isOwner = user && user._id === idea._ownerId;

  section.innerHTML = createIdeaHTML(idea, isOwner);
  if(isOwner) {
    section.querySelector('#deleteBtn').addEventListener('click', async (ev) => {
      ev.preventDefault();
      const choice = confirm('Are you sure ypu want to delete this idea?');
      if(choice) {
       await deleteById(id);
       ctx.goTo('/catalog');
      }
    });
  }
}

function createIdeaHTML(idea, isOwner) {
  let html = `
  <img class="det-img" src="${idea.img}" />
  <div class="desc">
      <h2 class="display-5">${idea.title}</h2>
      <p class="infoType">Description:</p>
      <p class="idea-description">${idea.description}</p>
  </div>`;

  if (isOwner) {
    html += `
    <div class="text-center">
        <a id="deleteBtn" class="btn detb" href="">Delete</a>
    </div>`;
  }

  return html;
}