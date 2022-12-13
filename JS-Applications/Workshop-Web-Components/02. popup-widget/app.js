const tmp = document.getElementById('popup-template');

class Popup extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(tmp.content.cloneNode(true));
    const img = this.getAttribute('img');
    if (img) {
      this.shadowRoot.querySelector('img').src = img;
    }
  }
}

customElements.define('info-popup', Popup);