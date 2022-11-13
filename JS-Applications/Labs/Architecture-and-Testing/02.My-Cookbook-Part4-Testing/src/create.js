import { post } from './api.js';
import { showDetails } from './details.js';
import { createSubmitHandler, setActiveNav } from './util.js';

const section = document.getElementById('create');
const form = section.querySelector('form');
createSubmitHandler(form, onSubmit);

export function showCreate(ctx) {
    ctx.render(section);
    setActiveNav('createLink');
}

async function onSubmit(data) {
    const body = {
        name: data.name,
        img: data.img,
        ingredients: data.ingredients.split('\n').map(l => l.trim()).filter(l => l != ''),
        steps: data.steps.split('\n').map(l => l.trim()).filter(l => l != '')
    };

    const resData = await post('/data/recipes', body);
    showDetails(resData._id);
}