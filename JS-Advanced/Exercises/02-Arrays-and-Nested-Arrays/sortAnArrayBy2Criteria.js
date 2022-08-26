function sortAnArrayBy2Criteria(arr) {
  return arr
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .join('\n');
}

// second solution with external function for sort

/* function sortAnArrayBy2Criteria(arr) {
  return arr
    .sort(sortBy2Criteria)
    .join('\n');

  function sortBy2Criteria(a, b) {
    if (a.length === b.length) {
      return a.localeCompare(b);
    }

    return a.length - b.length;
  }
} */

console.log(sortAnArrayBy2Criteria(['alpha',
  'beta',
  'gamma']));
console.log(sortAnArrayBy2Criteria(['Isacc',
  'Theodor',
  'Jack',
  'Harrison',
  'George']));
console.log(sortAnArrayBy2Criteria(['test',
  'Deny',
  'omen',
  'Default']));