import { html } from '../lib.js';


const homeTemplate = () => html`
<article class="hero layout">
  <img src="./assets/team.png" class="left-col pad-med">
  <div class="pad-med tm-hero-col">
    <h2>Welcome to Team Manager!</h2>
    <p>Want to organize your peers? Create and manage a team for free.</p>
    <p>Looking for a team to join? Browse our communities and find like-minded people!</p>
    <a href="/register" class="action cta">Sign Up Now</a>
    <a href="/catalog" class="action cta">Browse Teams</a>
  </div>
</article>`;

export function showHome(ctx) {
  ctx.render(homeTemplate());
}