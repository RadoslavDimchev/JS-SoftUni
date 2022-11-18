import { render } from '../node_modules/lit-html/lit-html.js';
import { getAllData } from './api.js';
import { rowTemplate } from './template.js';


loadData();
document.querySelector('#searchBtn').addEventListener('click', onClick);
const input = document.getElementById('searchField');

function onClick() {
   document.querySelectorAll('tr')
      .forEach(tr => {
         if (tr.textContent.toLowerCase().trim().includes(input.value.toLowerCase())) {
            tr.classList.add('select');
         } else {
            tr.classList.remove('select');
         }
      });

   input.value = '';
}

async function loadData() {
   const data = await getAllData();
   render(Object.values(data).map(rowTemplate), document.querySelector('tbody'));
}