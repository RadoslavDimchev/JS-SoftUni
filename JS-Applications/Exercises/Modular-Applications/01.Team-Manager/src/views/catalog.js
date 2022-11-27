import { getAllItems, getAllMyItems, getMembers } from '../api/data.js';
import { html, nothing } from '../lib.js';
import { getUserData, parseQuerystring } from '../util.js';


const catalogTemplate = (items, userPage, userData, page, pages) => html`
<article class="pad-med">
  ${userPage ? html`<h1>My Teams</h1>` : html`<h1>Team Browser</h1>`}
</article>

${userData
? html`<article class="layout narrow">
  ${userPage && items.length === 0 
  ? html`
      <div class="pad-med">
        <p>You are not a member of any team yet.</p>
        <p><a href='/catalog'>Browse all teams</a> to join one, or use the button bellow to cerate your own team.</p>
      </div>`
  : nothing}
  <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
</article>`
: nothing}

${items}`;

const itemTemplate = (item, members) => html`
<article class="layout">
  <img src=${item.logoUrl} class="team-logo left-col">
  <div class="tm-preview">
    <h2>${item.name}</h2>
    <p>${item.description}</p>
    <span class="details">${members} Members</span>
    <div><a href=${'/catalog/' + item._id} class="action">See details</a></div>
  </div>
</article>`;

const pagerTemplate = (page, pages) => html`
<div class="tm-preview">
  <p>Page ${page}</p>
  ${page > 1 ? html`<a href=${`?page=${page - 1}`} class="action">&lt; Prev</a>` : nothing}
  ${page < pages ? html`<a href=${`?page=${page + 1}`} class="action">Next &gt;</a>` : nothing}
</div>`;

export async function showCatalog(ctx) {
  const query = parseQuerystring(ctx.querystring);
  const page = Number(query.page) || 1;
  
  const userData = getUserData();
  const userPage = ctx.pathname === '/my-teams';
  ctx.render(catalogTemplate(await loadItems(userPage, page), userPage, userData, page));
}

async function loadItems(userPage, page = 1) {
  const userData = getUserData();
  let items = [];
  
  if (userPage) {
    items = await getAllMyItems(userData.id, page);
    items.data = items.data.map(i => i.team);
  } else {
    items = await getAllItems(page);
  }

  const allMembers = await getMembers();

  return [
    pagerTemplate(page, items.pages),
    ...items.data.map(i => {
      let members = 0;
      allMembers.forEach(m => {
        if (m.teamId === i._id) {
         members++;
        }
      });
      return itemTemplate(i, members);
    })];
}