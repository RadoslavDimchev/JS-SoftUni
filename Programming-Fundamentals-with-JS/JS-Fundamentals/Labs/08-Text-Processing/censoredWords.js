function censoredWords(text, word) {
  const asterisks = '*'.repeat(word.length);
  const newText = text
    .split(word)
    .join(asterisks);

  console.log(newText);
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');


// a solution with recursion

/* function censoredWords(text, word) {
  if (word !== '*') {
    const asterisks = '*'.repeat(word.length);

    function censor() {
      if (text.includes(word)) {
        text = text.replace(word, asterisks);
        censor();
      }
    }

    censor();
  }

  console.log(text);
} */