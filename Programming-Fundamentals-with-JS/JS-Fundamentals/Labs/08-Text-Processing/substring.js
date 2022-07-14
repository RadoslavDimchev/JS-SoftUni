function substring(str, startIndex, count) {
  const endIndex = startIndex + count;
  const result = str.substring(startIndex, endIndex);
  console.log(result);
}

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);