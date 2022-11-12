import { post } from './api.js';
import { createSubmitHandler, setActiveNav } from './util.js';


const section = document.getElementById('register');
let ctx = null;

export function showRegister(inCtx) {
    ctx = inCtx;
    ctx.render(section);
    setActiveNav('registerLink');

    const form = section.querySelector('form');
    createSubmitHandler(form, onSubmit);
}

async function onSubmit(data) {
    if (data.password != data.rePass) {
        return alert('Passwords don\'t match');
    }

    const body = {
        email: data.email,
        password: data.password,
    };

    const resData = await post('/users/register', body);

    sessionStorage.setItem('authToken', resData.accessToken);
    sessionStorage.setItem('userId', resData._id);
    document.getElementById('user').style.display = 'inline-block';
    document.getElementById('guest').style.display = 'none';

    ctx.setUserNav();
    ctx.goTo('catalogLink');
}