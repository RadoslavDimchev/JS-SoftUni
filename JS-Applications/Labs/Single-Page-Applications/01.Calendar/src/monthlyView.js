const sections = [...document.querySelectorAll('.daysCalendar')];
const months = {
  'Jan': 1,
  'Feb': 2,
  'Mar': 3,
  'Apr': 4,
  'May': 5,
  'Jun': 6,
  'Jul': 7,
  'Aug': 8,
  'Sept': 9,
  'Oct': 10,
  'Nov': 11,
  'Dec': 12
};

export function showDates(year, month) {
  const section = sections.find(s => s.id === `month-${year}-${months[month]}`);
  document.querySelector('body').replaceChildren(section);
}