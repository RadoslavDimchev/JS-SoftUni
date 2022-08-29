function colorize() {
  const rows = document.querySelectorAll('tr:nth-child(2n)');
  console.log(rows);

  for (const row of rows) {
    row.style.background = 'teal';
  }
}