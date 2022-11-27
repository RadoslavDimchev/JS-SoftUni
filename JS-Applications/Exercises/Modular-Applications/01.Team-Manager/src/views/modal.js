const element = document.createElement('div');
element.className = 'overlay';
element.innerHTML = `
<div class="modal">
  <p></p>
  <a href="#" class="action" id="modal-ok">OK</a>
  <a href="#" class="action" id="modal-cancel">Cancel</a>
</div>`;

element.querySelector('#modal-ok').addEventListener('click', () => onChoice(true));
element.querySelector('#modal-cancel').addEventListener('click', () => onChoice(false));

let callback = null;
let params = null;

function onChoice(choice) {
  element.remove();
  if (choice) {
    callback(...params);
  }
}

export function showModal(message, cb, ...pr) {
  callback = cb;
  params = pr;
  element.querySelector('p').textContent = 'Are you sure you want to ' + message;
  document.body.appendChild(element);
}