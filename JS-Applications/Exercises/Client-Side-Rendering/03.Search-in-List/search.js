import { html, render } from '../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';


const listTemplate = () => html`
<ul>
   ${towns.map(t => html`<li>${t}</li>`)}
</ul>`;

render(listTemplate(), document.getElementById('towns'));

document.querySelector('button').addEventListener('click', search);
const input = document.getElementById('searchText');

function search() {
   let matches = 0;

   document.querySelectorAll('li')
      .forEach(li => {
         if (li.textContent.includes(input.value)) {
            matches++;
            li.classList.add('active');
         } else {
            li.classList.remove('active');
         }
      });

   document.getElementById('result').textContent = `${matches} matches found`;
   input.value = '';
}