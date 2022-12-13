import { html, render as litRender } from '../node_modules/lit-html/lit-html.js';


const tmp = (ctx) => html`
<style>
    .slider-container {
        font-family: 'Montserrat', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100px;
    }

    .slider-percentage-value {
        font-weight: bold;
        text-align: center;
        margin: 1em 0;
    }

    .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 15px;
        border-radius: 5px;
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
        margin: 0 1em;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #4CAF50;
        cursor: pointer;
    }

    .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #4CAF50;
        cursor: pointer;
    }
</style>
<div class="slider-container">
    <input @input=${ctx.input} class="slider" type="range" value=${ctx.value} step=${ctx.step} />
    <div class="slider-end">
        Percentage: <span class="slider-percentage-value">${ctx.percentage} %</span>
    </div>
</div>`;

class Slider extends HTMLElement {
  constructor() {
    super();
    this.state = {
      step: this.step,
      value: this.value,
      percentage: this.percentage,
      input: this.input
    };
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  get step() {
    return this.getAttribute('step') || '1';
  }

  get isInverted() {
    return this.hasAttribute('invert');
  }

  get value() {
    if (this.isInverted) {
      return 100 - this.getAttribute('value') || '50';
    }
    return this.getAttribute('value') || '50';
  }

  get percentage() {
    if (this.isInverted) {
      return (100 - Number(this.value)).toFixed(2);
    }
    return Number(this.value).toFixed(2);
  }

  input(e) {
    this.state.value = Number(e.target.value);

    this.state.percentage = this.isInverted
      ? (100 - this.state.value).toFixed(2)
      : this.state.value.toFixed(2);

    this.render();
  }

  render() {
    litRender(tmp(this.state), this.shadowRoot, { host: this });
  }
}

customElements.define('my-slider', Slider);