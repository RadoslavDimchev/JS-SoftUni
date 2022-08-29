function sumTable() {
  const rows = document.querySelectorAll('table tr');
  let total = 0;

  for (let i = 1; i < rows.length - 1; i++) {
    const cost = rows[i].lastElementChild.textContent
    total += Number(cost);
  }

  document.getElementById('sum').textContent = total;
}