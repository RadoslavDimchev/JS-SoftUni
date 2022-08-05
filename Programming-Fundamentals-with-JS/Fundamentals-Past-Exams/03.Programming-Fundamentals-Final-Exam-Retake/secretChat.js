function secretChat(input = []) {
  let message = input.shift();

  const commands = {
    InsertSpace: (message, index) => {
      /* Inserts a single space at the given index. The given index will always be valid. */
      index = Number(index);

      message = message.substring(0, index) + ' ' + message.substring(index);

      console.log(message);
      return message;
    },
    Reverse: (message, substring) => {
      /* If the message contains the given substring, cut it out, reverse it and add it at the end of the message. 
      If not, print "error".
      This operation should replace only the first occurrence of the given substring if there are two or more occurrences. */
      if (message.includes(substring)) {
        message = message.replace(substring, '');

        substring = substring.split('').reverse().join('');
        message += substring;

        console.log(message);
      } else {
        console.log('error');
      }

      return message;
    },
    ChangeAll: (message, substring, replacement) => {
      /* Changes all occurrences of the given substring with the replacement text. */
      message = message.split(substring).join(replacement);

      console.log(message);
      return message;
    }
  };

  while (input[0] !== 'Reveal') {
    const [command, paramOne, paramTwo] = input.shift().split(':|:');
    message = commands[command](message, paramOne, paramTwo);
  }

  console.log(`You have a new text message: ${message}`);
}

secretChat([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal'
]);
secretChat([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal'
]);