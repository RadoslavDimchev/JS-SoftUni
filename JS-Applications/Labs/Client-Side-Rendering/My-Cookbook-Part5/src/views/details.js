import {html } from '../dom.js';
import { getRecipeById, deleteRecipeById } from '../api/data.js';


const detailsTemplate = (recipe, isOwner, nav, onDelete) => html`        
<section id="details">
    <article>
        <h2>${recipe.name}</h2>
        <div class="band">
            <div class="thumb">
                <img src=${recipe.img}>
            </div>
            <div class="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    ${recipe.ingredients.map(i => html`<li>${i}</li>`)}
                </ul>
            </div>
        </div>
        <div class="description">
            <h3>Preparation:</h3>
            ${recipe.steps.map(s => html`<p>${s}</p>`)}
        </div>
        ${isOwner 
            ? html`
            <div class="controls">
                <button @click=${() => nav.goTo('edit', recipe._id)}>\u270E Edit</button>
                <button @click=${() => onDelete(recipe)}>\u2716 Delete</button>
            </div>` 
            : ''}
    </article>
</section>`;

export function setupDetails(nav) {
    return showDetails;

    async function showDetails(id) {
        const recipe = await getRecipeById(id);
        const userId = sessionStorage.getItem('userId');
        const isOwner = userId && userId === recipe._ownerId;
        return detailsTemplate(recipe, isOwner, nav, onDelete);
    }

    async function onDelete(recipe) {
        const confirmed = confirm(`Are you sure you want to delete ${recipe.name}?`);
        if (confirmed) {
            try {
                await deleteRecipeById(recipe._id);
                nav.goTo('deleted');
            } catch (err) {
                alert(err.message);
            }
        }
    }
}
