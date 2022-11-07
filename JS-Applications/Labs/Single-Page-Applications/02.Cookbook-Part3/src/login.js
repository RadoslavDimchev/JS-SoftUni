import { setupCatalog } from './catalog.js';
import { checkUserNav, setupNav } from './util.js';


const section = document.getElementById('login');

export function setupLogin(event) {
    event.preventDefault();
    setupNav('loginBtn');

    document.querySelector('main').replaceChildren(section);

    const form = section.querySelector('form');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
    }));

    async function onSubmit(data) {
        const body = JSON.stringify({
            email: data.email,
            password: data.password,
        });

        try {
            const response = await fetch('http://localhost:3030/users/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });
            const data = await response.json();

            if (response.status == 200) {
                sessionStorage.setItem('authToken', data.accessToken);
                sessionStorage.setItem('id', data._id);
                setupCatalog();
                checkUserNav();
            } else {
                throw new Error(data.message);
            }
        } catch (err) {
            console.error(err.message);
        }
    }
}