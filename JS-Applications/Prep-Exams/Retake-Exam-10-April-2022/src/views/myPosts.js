import { getAllMy } from '../api/data.js';
import { html } from '../lib.js';


const postsTemplate = (posts) => html`
<section id="my-posts-page">
  <h1 class="title">My Posts</h1>
  ${posts.length === 0
  ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>`
  : html`<div class="my-posts">${posts.map(postCardTemplate)}</div>`}
</section>`;

const postCardTemplate = (post) => html`
<div class="post">
  <h2 class="post-title">${post.title}</h2>
  <img class="post-image" src=${post.imageUrl} alt="Material Image">
  <div class="btn-wrapper">
    <a href=${'/catalog/' + post._id} class="details-btn btn">Details</a>
  </div>
</div>`;

export async function showMyPosts(ctx) {
  const posts = await getAllMy(ctx.userData.id);
  ctx.render(postsTemplate(posts));
}