function hogwarts(input = []) {
  let spell = input.shift();

  while (input[0] !== 'Abracadabra') {
    const [command, paramOne, paramTwo] = input
      .shift()
      .split(' ');

    switch (command) {
      case 'Abjuration':
        spell = spell.toUpperCase();
        console.log(spell);
        break;
      case 'Necromancy':
        spell = spell.toLowerCase();
        console.log(spell);
        break;
      case 'Illusion':
        const index = Number(paramOne);
        const letter = paramTwo;

        if (index >= 0 & index < spell.length) {
          spell = spell.substring(0, index) + letter + spell.substring(index + 1);
          console.log('Done!');
        } else {
          console.log('The spell was too weak.');
        }
        break;
      case 'Divination':
        const firstSubstring = paramOne;
        const secondSubstring = paramTwo;

        if (spell.includes(firstSubstring)) {
          spell = spell.split(firstSubstring).join(secondSubstring);
        }

        console.log(spell);
        break;
      case 'Alteration':
        const substring = paramOne;

        if (spell.includes(substring)) {
          spell = spell.replace(substring, '');
          console.log(spell);
        }
        break;
      default:
        console.log('The spell did not work!');
    }
  }
}

hogwarts(["A7ci0",
  "Illusion 1 c",
  "Illusion 4 o",
  "Abjuration",
  "Abracadabra"]);
hogwarts(["TR1GG3R",
  "Necromancy",
  "Illusion 8 m",
  "Illusion 9 n",
  "Abracadabra"]);
hogwarts(["SwordMaster",
  "Target Target Target",
  "Abjuration",
  "Necromancy",
  "Alteration master",
  "Abracadabra"]);  