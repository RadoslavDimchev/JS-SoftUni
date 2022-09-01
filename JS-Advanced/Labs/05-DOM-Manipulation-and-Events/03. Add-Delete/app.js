function addItem() {
  const input = document.getElementById('newItemText');
  const list = document.getElementById('items');

  if (input.value.length === 0) return;

  // list item
  const liElement = document.createElement('li');
  liElement.textContent = input.value;
  list.appendChild(liElement);

  // delete button
  const deleteBtn = document.createElement('a');
  deleteBtn.textContent = '[Delete]';
  deleteBtn.href = '#';
  liElement.appendChild(deleteBtn);

  input.value = '';

  list.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      e.target.parentElement.remove();
    }
  });
}