import { html, render } from '../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';


const listTemplate = (cats) => html`
<ul>
  ${cats.map(catCardTemplate)}
</ul>`;

const catCardTemplate = (cat) => html`
<li>
  <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
  <div class="info">
    <button class="showBtn">Show status code</button>
    <div class="status" style="display: none" id="100">
      <h4>Status Code: ${cat.statusCode}</h4>
      <p>${cat.statusMessage}</p>
    </div>
  </div>
</li>`;

const catsSection = document.getElementById('allCats');
render(listTemplate(cats), catsSection);
catsSection.addEventListener('click', onClick);

function onClick(ev) {
  if (ev.target.tagName !== 'BUTTON') {
    return;
  }

  const button = ev.target;
  if (button.textContent === 'Show status code') {
    button.parentElement.children[1].style.display = 'block';
    button.textContent = 'Hide status code';
  } else {
    button.parentElement.children[1].style.display = 'none';
    button.textContent = 'Show status code';
  }
}