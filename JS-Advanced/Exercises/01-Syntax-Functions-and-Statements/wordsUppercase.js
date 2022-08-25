function wordsUppercase(string) {
  const words = string
    .match(/\w+/g)
    .join(', ')
    .toUpperCase();

  console.log(words);
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');