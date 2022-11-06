import { showDates } from './monthlyView.js';
import { showMonths } from './yearlyView.js';
import { showYears } from './yearView.js';

export function onDivOrTd(element) {
  if (element.tagName === 'TD') {
    element = element.children[0];
  }
  const content = element.textContent;

  if (isNaN(Number(content))) {
    const year = element.parentNode.parentNode.parentNode.parentNode.children[0].textContent;
    showDates(year, content);
  } else if (content.length === 4) {
    showMonths(content);
  }
}

export function onCaption(element) {
  const elements = element.textContent.split(' ');

  if (elements.length === 1) {
    showYears();
  } else if (elements.length === 2) {
    showMonths(elements[1]);
  }
}