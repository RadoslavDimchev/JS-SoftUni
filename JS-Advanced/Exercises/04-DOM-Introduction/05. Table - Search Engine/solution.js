function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);

  function onClick() {
    const rows = document.querySelectorAll('tbody tr');
    const input = document.getElementById('searchField').value;

    document.getElementById('searchField').value = '';

    for (const row of rows) {
      row.classList.remove('select');

      if (row.textContent.includes(input)) {
        row.className = 'select';
      }
    }
  }
}