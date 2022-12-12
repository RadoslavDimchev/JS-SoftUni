// With closed mode
const tmp = document.getElementById('app-button');


class AppButton extends HTMLElement {
  #root;

  constructor() {
    super();

    this.#root = this.attachShadow({ mode: 'closed' });
  }

  connectedCallback() {
    this.#root.appendChild(tmp.content.cloneNode(true));
    this.#root.querySelector('button').textContent = this.getAttribute('text');
    this.#root.querySelector('button').classList.add(this.getAttribute('type'));
  }
}

window.customElements.define('app-button', AppButton);


// With open mode
// const tmp = document.getElementById('app-button');


// class AppButton extends HTMLElement {
//   constructor() {
//     super();

//     this.attachShadow({ mode: 'open' });
//   }

//   connectedCallback() {
//     this.shadowRoot.appendChild(tmp.content.cloneNode(true));
//     this.shadowRoot.querySelector('button').textContent = this.getAttribute('text');
//     this.shadowRoot.querySelector('button').classList.add(this.getAttribute('type'));
//   }
// }

// window.customElements.define('app-button', AppButton);