const section = document.getElementById('years');

export function showYears() {
  document.querySelector('body').replaceChildren(section);
}