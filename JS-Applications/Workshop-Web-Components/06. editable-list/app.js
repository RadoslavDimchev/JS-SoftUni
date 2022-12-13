import { html, nothing, render as litRender } from '../node_modules/lit-html/lit-html.js';


const tmp = (ctx) => html`
<style>
.container {
    max-width: 500px;
    margin: 50px auto;
    border-radius: 20px;
    border: solid 8px #2c3033;
    background: white;
    box-shadow: 0 0 0px 1px rgba(255, 255, 255, .4), 0 0 0px 3px #2c3033;
}

.editable-list-header {
    margin: 0;
    border-radius: 10px 10px 0 0px;
    background-image: linear-gradient(#687480 0%, #3b4755 100%);
    font: bold 18px/50px arial;
    text-align: center;
    color: white;
    box-shadow: inset 0 -2px 3px 2px rgba(0, 0, 0, .4), 0 2px 2px 2px rgba(0, 0, 0, .4);
}

.editable-list {
    padding-left: 0;
}

.editable-list>li,
.editable-list-add-container {
    display: flex;
    align-items: center;
}

.editable-list>li {
    justify-content: space-between;
    padding: 0 1em;
}

.editable-list-add-container {
    justify-content: space-evenly;
}

.editable-list>li:nth-child(odd) {
    background-color: rgb(229, 229, 234);
}

.editable-list>li:nth-child(even) {
    background-color: rgb(255, 255, 255);
}

.editable-list-add-container>label {
    font-weight: bold;
    text-transform: uppercase;
}

.icon {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.8rem;
    outline: none;
}
</style>
<article class="container">
<h1 class="editable-list-header">${ctx.title}</h1>

<ul class="editable-list">
  ${ctx.items.length === 0
    ? nothing
    : ctx.items.map((item, i) => itemTemplate(item, i, ctx.onDelete))}
</ul>

<div class="editable-list-add-container">
    <label>${ctx.addTitle}</label>
    <input class="add-new-list-item-input" type="text">
    <button @click=${ctx.onAdd} class="editable-list-add-item icon">&oplus;</button>
</div>
</article>`;

const itemTemplate = (item, i, onDelete) => html`
<li data-index=${i}>
  <p class="editable-list-item-value">${item}</p>
  <button @click=${onDelete} class="editable-list-remove-item icon">&ominus;</button>
</li>`;

class EditableList extends HTMLElement {
  constructor() {
    super();
    this.state = {
      title: this.getAttribute('title'),
      addTitle: this.getAttribute('addTitle'),
      items: this.items,
      onDelete: this.onDelete,
      onAdd: this.onAdd,
    };
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  get items() {
    const listItems = [];

    [...this.attributes].forEach(a => {
      if (a.name.includes('list-item-')) {
        listItems.push(a.value);
      }
    });

    return listItems;
  }

  onDelete(e) {
    this.state.items.splice(Number(e.target.parentNode.getAttribute('data-index')), 1);
    this.render();
  }

  onAdd(e) {
    const input = e.target.parentNode.children[1];
    if (input.value) {
      this.state.items.push(input.value);
      input.value = '';
      this.render();
    }
  }

  render() {
    litRender(tmp(this.state), this.shadowRoot, { host: this });
  }
}

customElements.define('my-list', EditableList);