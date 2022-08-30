function generateReport() {
  const textarea = document.getElementById('output');
  const headers = document.querySelectorAll('thead tr th input');
  const rows = Array.from(document.querySelectorAll('tbody tr'));
  const checked = {};
  const result = [];

  for (let i = 0; i < headers.length; i++) {
    if (headers[i].checked === true) {
      checked[headers[i].name] = i;
    }
  }

  for (const row of rows) {
    const obj = {};

    for (const [header, index] of Object.entries(checked)) {
      obj[header] = row.children[index].textContent;
    }

    result.push(obj);
  }

  textarea.value = JSON.stringify(result);
}