function theImitationGame(input = []) {
  let message = input.shift();
  const commands = {
    Move,
    Insert,
    ChangeAll
  };

  while (input[0] !== 'Decode') {
    let [command, p1, p2] = input
      .shift()
      .split('|');

    commands[command](p1, p2);
  }

  console.log(`The decrypted message is: ${message}`);

  function Move(lettersCount) {
    // Moves the first n letters to the back of the string
    const start = message.substring(0, lettersCount);
    const end = message.substring(lettersCount);

    message = end + start;
  }

  function Insert(index, value) {
    // Inserts the given value before the given index in the string
    const start = message.substring(0, index);
    const end = message.substring(index);

    message = start + value + end;
  }

  function ChangeAll(substring, replacement) {
    // Changes all occurrences of the given substring with the replacement text
    message = message.split(substring).join(replacement);
  }
}

theImitationGame([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode',
]);
theImitationGame([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode',
]);