function printEveryNthElementFromAnArray(arr, step) {
  return arr.filter((x, i) => i % step === 0);
}

console.log(printEveryNthElementFromAnArray(['5',
  '20',
  '31',
  '4',
  '20'],
  2));
console.log(printEveryNthElementFromAnArray(['dsa',
  'asd',
  'test',
  'tset'],
  2));
console.log(printEveryNthElementFromAnArray(['1',
  '2',
  '3',
  '4',
  '5'],
  6));