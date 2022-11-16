import { contacts } from './contacts.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const cardTempalte = (c) => html`<div class="contact card">
  <div>
    <i class="far fa-user-circle gravatar"></i>
  </div>
  <div class="info">
    <h2>Name: ${c.name}</h2>
    <button class="detailsBtn">Details</button>
    <div class="details" id="1">
      <p>Phone number: ${c.phoneNumber}</p>
      <p>Email: ${c.email}</p>
    </div>
  </div>
</div>`;

render(contacts.map(c => cardTempalte(c)), document.getElementById('contacts'));