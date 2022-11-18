import { html, render } from '../node_modules/lit-html/lit-html.js';


document.querySelector('form').addEventListener('submit', onSubmit);

const listTemplates = (towns) => html`
<ul>${towns.map(townTemplate)}</ul>`;

const townTemplate = (town) => html`
<li>${town}</li>`;

function onSubmit(ev) {
  ev.preventDefault();

  const towns = new FormData(ev.target)
    .get('towns')
    .split(', ');

  render(listTemplates(towns), document.getElementById('root'));
}