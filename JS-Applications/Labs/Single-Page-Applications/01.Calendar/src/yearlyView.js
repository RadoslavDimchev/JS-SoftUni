const sections = [...document.querySelectorAll('.monthCalendar')];

export function showMonths(year) {
  const section = sections.find(s => s.id === 'year-' + year);
  document.querySelector('body').replaceChildren(section);
}