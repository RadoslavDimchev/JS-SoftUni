function solve() {
  let text = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;

  if (convention !== 'Camel Case' && convention !== 'Pascal Case') {
    return document.getElementById('result').textContent = 'Error!';
  }

  const words = text
    .toLowerCase()
    .split(' ');

  for (let i = 0; i < words.length; i++) {
    if (i !== 0 || convention === 'Pascal Case') {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }

  document.getElementById('result').textContent = words.join('');
}