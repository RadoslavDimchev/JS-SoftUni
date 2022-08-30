function search() {
  const towns = document.querySelectorAll('ul#towns li');
  const input = document.getElementById('searchText').value;
  const result = document.getElementById('result');
  let matches = 0;

  for (const town of towns) {
    town.style.fontWeight = 'normal';
    town.style.textDecoration = 'none';

    if (town.textContent.includes(input)) {
      matches++;
      town.style.fontWeight = 'bold';
      town.style.textDecoration = 'underline';
    }
  }

  result.textContent = `${matches} matches found`;
}