function printAnArrayWithAGivenDelimiter(arr, separator) {
  console.log(arr.join(separator));
}

printAnArrayWithAGivenDelimiter(['One',
  'Two',
  'Three',
  'Four',
  'Five'],
  '-');
printAnArrayWithAGivenDelimiter(['How about no?',
  'I',
  'will',
  'not',
  'do',
  'it!'],
  '_');