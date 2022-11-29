import { getAllMemes } from '../api/data.js';
import { html } from '../lib.js';


const memeTemplate = (meme) => html`
<div class="meme">
  <div class="card">
    <div class="info">
      <p class="meme-title">${meme.title}</p>
      <img class="meme-image" alt="meme-img" src=${meme.imageUrl}>
    </div>
    <div id="data-buttons">
      <a class="button" href=${'/catalog/' + meme._id}>Details</a>
    </div>
  </div>
</div>`;

const catalogTemplate = (memes) => html`
<section id="meme-feed">
  <h1>All Memes</h1>
  <div id="memes">
    ${memes.length === 0
    ? html`<p class="no-memes">No memes in database.</p>`
    : memes.map(memeTemplate)}
  </div>
</section>`;

export async function catalogView(ctx) {
  const memes = await getAllMemes();
  ctx.render(catalogTemplate(memes));
}