import { onDivOrTd, onCaption } from './util.js';

document.querySelector('body').addEventListener('click', (event) => {
  const element = event.target;

  if (element.tagName === 'DIV' || element.tagName === 'TD') {
    onDivOrTd(element);
  } else if (element.tagName === 'CAPTION') {
    onCaption(element);
  }
});