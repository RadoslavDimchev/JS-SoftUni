function solve() {
  const text = document.getElementById('input').value;
  const result = document.getElementById('output');
  const sentences = text.split('.').filter(s => s.length);
  const paragraphs = [];

  while (sentences.length) {
    const paragraph = sentences.splice(0, 3).join('.') + '.';
    paragraphs.push(`<p>${paragraph}</p>`);
  }

  result.innerHTML = paragraphs.join('\n');
}