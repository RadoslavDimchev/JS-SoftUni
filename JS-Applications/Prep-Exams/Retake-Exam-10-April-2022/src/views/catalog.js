import { getAll } from '../api/data.js';
import { html } from '../lib.js';


const catalogTemplate = (posts) => html`
<section id="dashboard-page">
  <h1 class="title">All Posts</h1>
  ${posts.length === 0
    ? html`<h1 class="title no-posts-title">No posts yet!</h1>`
    : html`<div class="all-posts">${posts.map(postCardTemplate)}</div>`}
</section>`;

const postCardTemplate = (post) => html`
<div class="post">
  <h2 class="post-title">${post.title}</h2>
  <img class="post-image" src=${post.imageUrl} alt="Kids clothes">
  <div class="btn-wrapper">
    <a href=${'/catalog/' + post._id} class="details-btn btn">Details</a>
  </div>
</div>`;

export async function showCatalog(ctx) {
  const posts = await getAll();
  ctx.render(catalogTemplate(posts));
}