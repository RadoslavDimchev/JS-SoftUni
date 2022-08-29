function extractText() {
  const items = Array.from(document.querySelectorAll('ul#items li'));
  const result = items.map(i => i.textContent).join('\n');

  document.getElementById('result').value = result;
}