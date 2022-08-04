function activationKeys(input = []) {
  let key = input.shift();

  const commands = {
    Contains: (key, substring) => {
      /*If the raw activation key contains the given substring, prints: "{raw activation key} contains {substring}".
      Otherwise, prints: "Substring not found!" */
      if (key.includes(substring)) {
        console.log(`${key} contains ${substring}`);
      } else {
        console.log(`Substring not found!`);
      }

      return key;
    },
    Flip: (key, letterCase, startIndex, endIndex) => {
      /* Changes the substring between the given indices (the end index is exclusive) to upper or lower case and then prints the activation key.*/
      startIndex = Number(startIndex);
      endIndex = Number(endIndex);

      const firstPart = key.substring(0, startIndex);
      let substring = key.substring(startIndex, endIndex);
      const lastPart = key.substring(endIndex);

      if (letterCase === 'Upper') {
        substring = substring.toUpperCase();
      } else {
        substring = substring.toLowerCase();
      }

      key = firstPart + substring + lastPart;

      console.log(key);
      return key;
    },
    Slice: (key, startIndex, endIndex) => {
      /* Deletes the characters between the start and end indices (the end index is exclusive) and prints the activation key.
      Both indices will be valid.*/
      startIndex = Number(startIndex);
      endIndex = Number(endIndex);

      key = key.substring(0, startIndex) + key.substring(endIndex);
      console.log(key);
      return key;
    }
  }

  while (input[0] !== 'Generate') {
    const [command, paramOne, paramTwo, paramThree] = input
      .shift()
      .split('>>>');

    key = commands[command](key, paramOne, paramTwo, paramThree);
  }

  console.log(`Your activation key is: ${key}`);
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate"]);
activationKeys(["134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate"]);