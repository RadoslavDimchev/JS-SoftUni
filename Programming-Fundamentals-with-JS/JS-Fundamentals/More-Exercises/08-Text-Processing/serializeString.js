function serializeString(input = []) {
  const text = input[0];
  const characters = {};

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (!characters.hasOwnProperty(char)) {
      characters[char] = [];
    }

    characters[char].push(i);
  }

  for (const char in characters) {
    console.log(`${char}:${characters[char].join('/')}`);
  }
}


// second solution with RegExp

/* function serializeString(input = []) {
  const text = input[0];
  const characters = {};

  text.match(/./g)
    .forEach((char, index) => {
      if (!characters.hasOwnProperty(char)) {
        characters[char] = [];
      }

      characters[char].push(index);
    });

  for (const char in characters) {
    console.log(`${char}:${characters[char].join('/')}`);
  }
} */

serializeString(["abababa"]);
serializeString(["avjavamsdmcalsdm"]);