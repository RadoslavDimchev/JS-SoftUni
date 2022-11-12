import { deleteReq } from './api.js';
import { e } from './dom.js';
import { showEdit } from './edit.js';
import { getRecipeById, setActiveNav } from './util.js';

const main = document.querySelector('main');
const section = document.getElementById('details');

export async function showDetails(id) {
    main.innerHTML = 'Loading&hellip;';
    setActiveNav();

    const recipe = await getRecipeById(id);
    section.innerHTML = '';
    main.replaceChildren(section);
    section.appendChild(createRecipeCard(recipe));
}

async function deleteRecipeById(id) {
    await deleteReq('/data/recipes/' + id);
    section.innerHTML = '';
    section.appendChild(e('article', {}, e('h2', {}, 'Recipe deleted')));
}

function createRecipeCard(recipe) {
    const result = e('article', {},
        e('h2', {}, recipe.name),
        e('div', { className: 'band' },
            e('div', { className: 'thumb' }, e('img', { src: recipe.img })),
            e('div', { className: 'ingredients' },
                e('h3', {}, 'Ingredients:'),
                e('ul', {}, recipe.ingredients.map(i => e('li', {}, i))),
            )
        ),
        e('div', { className: 'description' },
            e('h3', {}, 'Preparation:'),
            recipe.steps.map(s => e('p', {}, s))
        ),
    );

    const userId = sessionStorage.getItem('userId');
    if (userId != null && recipe._ownerId == userId) {
        result.appendChild(e('div', { className: 'controls' },
            e('button', { onClick: () => showEdit(recipe._id) }, '\u270E Edit'),
            e('button', { onClick: onDelete }, '\u2716 Delete'),
        ));
    }

    return result;

    function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete ${recipe.name}?`);
        if (confirmed) {
            deleteRecipeById(recipe._id);
        }
    }
}