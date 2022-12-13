class ExpandingList extends HTMLUListElement {
  constructor() {
    self = super();

    const uls = Array.from(self.querySelectorAll('ul'));
    const lis = Array.from(self.querySelectorAll('li'));

    uls.forEach(ul => ul.style.display = 'none');
    lis.forEach(li => {
      if (li.querySelectorAll('li').length > 0) {
        li.setAttribute('class', 'closed');

        const childText = li.childNodes[0];
        const newSpan = document.createElement('span');
        newSpan.textContent = childText.textContent;
        newSpan.style.cursor = 'pointer';
        newSpan.onclick = self.showul;

        childText.parentNode.insertBefore(newSpan, childText);
        childText.parentNode.removeChild(childText);
      }
    });
  }

  showul(e) {
    const nextul = e.target.nextElementSibling;

    if (nextul.style.display == 'block') {
      nextul.style.display = 'none';
      nextul.parentNode.setAttribute('class', 'closed');
    } else {
      nextul.style.display = 'block';
      nextul.parentNode.setAttribute('class', 'open');
    }
  }
}

customElements.define('expanding-list', ExpandingList, { extends: 'ul' });