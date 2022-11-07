import { setupCatalog } from './catalog.js';
import { setupLogin } from './login.js';
import { setupRegister } from './register.js';
import { checkUserNav } from './util.js';
import { setupCreate } from './create.js';


window.addEventListener('load', async () => {
    checkUserNav();
    setupCatalog();

    document.querySelector('nav a').addEventListener('click', setupCatalog);
    document.getElementById('logoutBtn').addEventListener('click', logout);
    document.getElementById('loginBtn').addEventListener('click', setupLogin);
    document.getElementById('registerBtn').addEventListener('click', setupRegister);
    document.getElementById('createBtn').addEventListener('click', setupCreate);
});

async function logout() {
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': sessionStorage.getItem('authToken')
        },
    });
    if (response.ok) {
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('id');
        checkUserNav();
        setupCatalog();
    } else {
        console.error(await response.json());
    }
}