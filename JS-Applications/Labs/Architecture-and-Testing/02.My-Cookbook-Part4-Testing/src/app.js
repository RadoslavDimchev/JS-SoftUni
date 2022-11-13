import { showCatalog } from './catalog.js';
import { showCreate } from './create.js';
import { showLogin } from './login.js';
import { showRegister } from './register.js';
import { get } from './api.js';

import { render } from './dom.js';
import { setUserNav } from './util.js';
import { home } from './home.js';

document.querySelector('header').addEventListener('click', setupNavigation);
document.getElementById('views').remove();

const links = {
    'catalogLink': showCatalog,
    'createLink': showCreate,
    'loginLink': showLogin,
    'registerLink': showRegister,
    'logoutBtn': logout,
    'homeLink': home
};

// Start application in catalog view
setUserNav();
goTo('homeLink');


function setupNavigation(ev) {
    if (ev.target.tagName == 'A') {
        const viewName = ev.target.id;
        if (goTo(viewName)) {
            ev.preventDefault();
        }
    }
}

export function goTo(viewName) {
    const view = links[viewName];

    if (typeof view === 'function') {
        view({
            render,
            goTo,
            setUserNav
        });

        return true;
    } else {
        return false;
    }
}

async function logout() {
    get('/users/logout');
    sessionStorage.removeItem('authToken');
    setUserNav();
    goTo('catalogLink');
}