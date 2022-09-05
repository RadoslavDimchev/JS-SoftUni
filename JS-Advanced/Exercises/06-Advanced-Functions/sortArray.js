function sortArray(arr, type) {
  const methods = {
    asc: (a, b) => a - b,
    desc: (a, b) => b - a
  };

  arr.sort(methods[type]);

  return arr;
}

// one line solution
// const sortArray = (arr, type) => arr.sort((a, b) => type === 'asc' ? a - b : b - a);

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));