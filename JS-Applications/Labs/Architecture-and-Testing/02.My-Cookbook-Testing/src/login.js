import { post } from './api.js';
import { createSubmitHandler, setActiveNav } from './util.js';


const section = document.getElementById('login');
let ctx = null;

export function showLogin(inCtx) {
    ctx = inCtx;
    ctx.render(section);
    setActiveNav('loginLink');

    const form = section.querySelector('form');
    createSubmitHandler(form, onSubmit);
}

async function onSubmit(data) {
    const body = {
        email: data.email,
        password: data.password,
    };

    const resData = await post('/users/login', body);

    sessionStorage.setItem('authToken', resData.accessToken);
    sessionStorage.setItem('userId', resData._id);

    ctx.setUserNav();
    ctx.goTo('catalogLink');
}