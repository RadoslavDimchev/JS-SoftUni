function daysInAMonth(month, year) {
  const days = new Date(year, month, 0).getDate();
  return days;
}

console.log(daysInAMonth(1, 2012));
console.log(daysInAMonth(2, 2021));