import { html } from '../dom.js';
import { getRecent } from '../api/data.js';


const homeTemplate = (recipes, goTo) => html`
<section id="home">
    <div class="hero">
        <h2>Welcome to My Cookbook</h2>
    </div>
    <header class="section-title">Recently added recipes</header>
    <div class="recent-recipes">
        ${recipes[0] ? recipePreview(recipes[0], goTo) : ''}
        ${spacer()}
        ${recipes[1] ? recipePreview(recipes[1], goTo) : ''}
        ${spacer()}
        ${recipes[2] ? recipePreview(recipes[2], goTo) : ''}
    </div>
    <footer class="section-title">
        <p>Browse all recipes in the <a href="/catalog">Catalog</a></p>
    </footer>
</section>`;

const spacer = () => html`<div class="recent-space"></div>`;

const recipePreview = (recipe, goTo) => html`
<article @click=${() => goTo('details', recipe._id)} class="recent">
    <div class="recent-preview"><img src=${recipe.img}></div>
    <div class="recent-title">${recipe.name}</div>
</article>`;

export function setupHome(nav) {
    return showHome;

    async function showHome() {
        const recipes = await getRecent();
        return homeTemplate(recipes, nav.goTo);
    }
}