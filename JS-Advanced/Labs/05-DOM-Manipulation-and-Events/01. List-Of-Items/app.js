function addItem() {
  const input = document.getElementById('newItemText');

  const li = document.createElement('li');
  li.textContent = input.value;

  document.getElementById('items').appendChild(li);

  input.value = '';
}