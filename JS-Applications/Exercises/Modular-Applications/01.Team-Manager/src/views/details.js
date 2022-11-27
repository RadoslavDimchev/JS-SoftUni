import { approveMember, becomeMember, getItemById, getMemberships, removeMember } from '../api/data.js';
import { html, nothing } from '../lib.js';
import { getUserData } from '../util.js';
import { showModal } from './modal.js';


const membersTemplate = (member, isOwner, id, ownerId) => html`
<li>
    ${member.user.username}
    ${isOwner && member._ownerId !== ownerId
      ? html`<a href=${`/catalog/${id}`} class="tm-control action" @click=${() => showModal('remove this member?', removeMember, member._id)}>Remove from team</a>`
      : nothing}
</li>`;

const membershipTemplate = (membership, item) => html`
<li>
  ${membership.user.username}
  <a href=${`/catalog/${item._id}`} class="tm-control action" @click=${() => {
    membership.status ='member';
    return showModal(`approve ${membership.user.username}?`, approveMember, membership._id, membership);
    }}>Approve</a>
  <a href=${`/catalog/${item._id}`} class="tm-control action" @click=${()=>
    showModal(`decline ${membership.user.username}?`, removeMember, membership._id)}>Decline</a>
</li>`;

const loggedTemplate = (memberships, id) => {
  const userData = getUserData();
  const membership = memberships.find(m => m._ownerId === userData.id);

  if(!membership) {
    return html`<a href=${`/catalog/${id}`} class="action" @click=${() => showModal('join this team?', becomeMember, { teamId: id })}>Join team</a>`;
  } else if (membership.status === 'pending') {
    return html`Membership pending. <a href=${`/catalog/${id}`} @click=${() => showModal('cancel the request?', removeMember, membership._id)}>Cancel request</a>`;
  } else {
    return html`<a href=${`/catalog/${id}`} class="action invert" @click=${() => showModal('leave the team?', removeMember, membership._id)}>Leave team</a>`;
  }
};

const detailsTemplate = (item, memberships, isOwner, isLogged) => html`
<article class="layout">
  <img src=${item.logoUrl} class="team-logo left-col">

  <div class="tm-preview">
    <h2>${item.name}</h2>
    <p>${item.description}</p>
    <span class="details">${memberships.filter(m => m.status === 'member').length} Members</span>

    <div>
      ${isOwner 
        ? html`<a href=${`/edit/${item._id}`} class="action">Edit team</a>` : nothing}
      ${isLogged ? loggedTemplate(memberships, item._id) : nothing}
    </div>
  </div>

  <div class="pad-large">
    <h3>Members</h3>
    <ul class="tm-members">
      ${memberships.filter(m => m.status === 'member').map(m => membersTemplate(m, isOwner, item._id, item._ownerId))}
    </ul>
  </div>

  ${isOwner
  ? html`
    <div class="pad-large">
      <h3>Membership Requests</h3>
      <ul class="tm-members">
        ${memberships.filter(m => m.status === 'pending').map(m => membershipTemplate(m, item))}
      </ul>
    </div>`
  : nothing}
</article>`;

export async function showDetails(ctx) {
  const [item, memberships] = await Promise.all([
    getItemById(ctx.params.id),
    getMemberships(ctx.params.id)
  ]);

  const userData = getUserData();
  if (userData === null) {
    ctx.render(detailsTemplate(item, memberships, false, false));
  } else if (userData.id === item._ownerId) {
    ctx.render(detailsTemplate(item, memberships, true, false));
  } else {
    ctx.render(detailsTemplate(item, memberships, false, true));
  }
}