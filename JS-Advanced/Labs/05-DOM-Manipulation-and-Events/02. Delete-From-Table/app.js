function deleteByEmail() {
  const input = document.querySelector('input[name="email"]').value;
  const rows = document.querySelectorAll('tbody tr');
  let isDeleted = false;

  for (const row of rows) {
    if (row.children[1].textContent === input) {
      row.parentElement.removeChild(row);
      isDeleted = true;
    }
  }

  document.getElementById('result').textContent = isDeleted ? 'Deleted.' : 'Not found.';
}