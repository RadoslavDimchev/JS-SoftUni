import { html, render } from '../node_modules/lit-html/lit-html.js';


const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
document.querySelector('[type="submit"]').addEventListener('click', addItem);
loadOptions();

const optionTemplate = (data) => html`
<option value=${data._id}>${data.text}</option>`;

async function loadOptions() {
    const data = await getData();
    render(Object.values(data).map(optionTemplate), document.getElementById('menu'));
}

async function addItem(ev) {
    ev.preventDefault();

    await postText(document.getElementById('itemText').value);
    loadOptions();
    document.getElementById('itemText').value = '';
}

async function getData() {
    const res = await fetch(url);
    return res.json();
}

async function postText(text) {
    try {
        const res = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }

        return res.json();
    } catch (error) {
        alert(error.message);
    }
}