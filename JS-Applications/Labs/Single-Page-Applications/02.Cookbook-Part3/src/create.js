import { setupCatalog } from './catalog.js';
import { checkUserNav, setupNav } from './util.js';


const section = document.getElementById('create');

export function setupCreate(event) {
    event.preventDefault();
    setupNav('createBtn');

    document.querySelector('main').replaceChildren(section);

    const form = section.querySelector('form');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
    }));

    async function onSubmit(data) {
        const body = JSON.stringify({
            name: data.name,
            img: data.img,
            ingredients: data.ingredients.split('\n').map(l => l.trim()).filter(l => l != ''),
            steps: data.steps.split('\n').map(l => l.trim()).filter(l => l != '')
        });

        const token = sessionStorage.getItem('authToken');
        if (token == null) {
            setupCatalog();
            checkUserNav();
        }

        try {
            const response = await fetch('http://localhost:3030/data/recipes', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': token
                },
                body
            });

            if (response.ok) {
                setupCatalog();
            } else {
                throw new Error(await response.json());
            }
        } catch (err) {
            console.error(err.message);
        }
    }
}