import { showDetails } from './details.js';
import { put } from './api.js';
import { createSubmitHandler, getRecipeById, setActiveNav } from './util.js';


const section = document.getElementById('edit');
const main = document.querySelector('main');

export async function showEdit(id) {
    main.innerHTML = '';
    main.appendChild(section);
    setActiveNav();

    fillInputs(await getRecipeById(id));

    const form = section.querySelector('form');
    createSubmitHandler(form, onSubmit);

    async function onSubmit(data) {
        const body = {
            name: data.name,
            img: data.img,
            ingredients: data.ingredients.split('\n').map(l => l.trim()).filter(l => l != ''),
            steps: data.steps.split('\n').map(l => l.trim()).filter(l => l != '')
        };

        await put('/data/recipes/' + id, body);
        showDetails(id);
    }
}

function fillInputs(recipe) {
    section.querySelector('[name="name"]').value = recipe.name;
    section.querySelector('[name="img"]').value = recipe.img;
    section.querySelector('[name="ingredients"]').value = recipe.ingredients.join('\n');
    section.querySelector('[name="steps"]').value = recipe.steps.join('\n');
}