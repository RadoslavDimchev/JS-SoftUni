function solve() {
  const recipientName = document.getElementById('recipientName');
  const title = document.getElementById('title');
  const message = document.getElementById('message');
  const addBtn = document.getElementById('add');
  const resetBtn = document.getElementById('reset');

  addBtn.addEventListener('click', add);
  resetBtn.addEventListener('click', reset);

  const listMails = document.getElementById('list');
  const deleteList = document.getElementsByClassName('delete-list')[0];
  const sentList = document.getElementsByClassName('sent-list')[0];

  function add(event) {
    event.preventDefault();

    const recipientNameValue = recipientName.value;
    const titleValue = title.value;
    const messageValue = message.value;

    if (!recipientNameValue || !titleValue || !messageValue) {
      return;
    }

    const li = genElement('li', listMails);
    genElement('h4', li, `Title: ${titleValue}`);
    genElement('h4', li, `Recipient Name: ${recipientNameValue}`);
    genElement('span', li, messageValue);

    const div = genElement('div', li);
    div.id = 'list-action';

    const sendBtn = genElement('button', div, 'Send');
    sendBtn.type = 'submit';
    sendBtn.id = 'send';
    sendBtn.addEventListener('click', sendMail);

    const deleteBtn = genElement('button', div, 'Delete');
    deleteBtn.type = 'submit';
    deleteBtn.id = 'delete';
    deleteBtn.addEventListener('click', deleteMail);

    recipientName.value = '';
    title.value = '';
    message.value = '';

    function sendMail() {
      li.innerHTML = '';
      li.className = '';

      sentList.appendChild(li);
      genElement('span', li, `To: ${recipientNameValue}`);
      genElement('span', li, `Title: ${titleValue}`);
      const divForDelete = genElement('div', li);
      divForDelete.className - 'btn';

      divForDelete.appendChild(deleteBtn);
      deleteBtn.removeAttribute('id');
      deleteBtn.className = 'delete';
    }

    function deleteMail() {
      li.innerHTML = '';
      li.className = '';
      deleteList.appendChild(li);
      genElement('span', li, `To: ${recipientNameValue}`);
      genElement('span', li, `Title: ${titleValue}`);
    }
  }

  function reset(event) {
    event.preventDefault();
    recipientName.value = '';
    title.value = '';
    message.value = '';
  }

  function genElement(tag, parent, content) {
    const element = document.createElement(tag);
    if (content) {
      element.textContent = content;
    }
    parent.appendChild(element);
    return element;
  }
}
solve();