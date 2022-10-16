function solution() {
  const addGiftBtn = document.querySelector('.card div button');
  const inputGift = document.querySelector('.card div input');
  const listOfGifts = document.querySelector('.container :nth-child(2) ul');
  const sendGiftSection = document.querySelector('.container :nth-child(3) ul');
  const discardedGiftSection = document.querySelector('.container :nth-child(4) ul');

  addGiftBtn.addEventListener('click', addGift);

  function addGift() {
    const li = genElement('li', listOfGifts, inputGift.value);
    li.className = 'gift';
    const sendBtn = genElement('button', li, 'Send');
    sendBtn.id = 'sendButton';
    const discardBtn = genElement('button', li, 'Discard');
    discardBtn.id = 'discardButton';

    sendBtn.addEventListener('click', () => sendToGiftSection(li, sendGiftSection, sendBtn, discardBtn));
    discardBtn.addEventListener('click', () => sendToGiftSection(li, discardedGiftSection, sendBtn, discardBtn));

    Array.from(listOfGifts.querySelectorAll('li'))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach(i => listOfGifts.appendChild(i));

    inputGift.value = '';
  }

  function genElement(elementToCreate, parent, textContent) {
    const element = document.createElement(elementToCreate);
    if (textContent) {
      element.textContent = textContent;
    }
    parent.appendChild(element);
    return element;
  }

  function sendToGiftSection(element, section, ...elements) {
    section.appendChild(element);
    elements[0].remove();
    elements[1].remove();
  }
}