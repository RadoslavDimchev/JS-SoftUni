function pascalCaseSplitter(input = '') {
  const words = [];
  let currWord = input[0];

  for (let i = 1; i < input.length; i++) {
    let char = input[i];

    if (char === char.toUpperCase()) {
      words.push(currWord);
      currWord = '';
    }

    currWord += char;
  }

  words.push(currWord);
  console.log(words.join(', '));
}


// second solution with RegExp

/* function pascalCaseSplitter(input = '') {
  const pattern = /[A-Z]([a-z]+)?/g;
  const match = input.match(pattern);

  console.log(match.join(', '));
} */

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');