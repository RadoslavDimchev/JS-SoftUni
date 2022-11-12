import { e } from './dom.js';
import { showDetails } from './details.js';
import { get } from './api.js';
import { setActiveNav } from './util.js';

const section = document.getElementById('catalog');

export async function showCatalog(ctx) {
    ctx.render(section);
    setActiveNav('catalogLink');

    const recipes = await get('/data/recipes?select=' + encodeURIComponent('_id,name,img'));
    const cards = recipes.map(createRecipePreview);

    const fragment = document.createDocumentFragment();
    cards.forEach(c => fragment.appendChild(c));
    section.innerHTML = '';
    section.appendChild(fragment);
}

function createRecipePreview(recipe) {
    const result = e('article', { className: 'preview', onClick: () => showDetails(recipe._id) },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return result;
}