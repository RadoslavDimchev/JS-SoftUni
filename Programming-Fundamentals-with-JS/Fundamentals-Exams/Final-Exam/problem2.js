function messageDecrypter(input = []) {
  const number = Number(input.shift());
  const pattern = /(\$|%)(?<tag>[A-Z][a-z]{2,})\1: \[(?<one>\d+)\]\|\[(?<two>\d+)\]\|\[(?<three>\d+)\]\|/;

  for (let i = 0; i < number; i++) {
    const message = input.shift();
    let valid;

    if (valid = pattern.exec(message)) {
      if (message !== valid[0]) {
        console.log('Valid message not found!');
        continue;
      }

      const tag = valid.groups.tag;

      const one = +valid.groups.one;
      const two = +valid.groups.two;
      const three = +valid.groups.three;

      const decryptedMessage = String.fromCharCode(one) + String.fromCharCode(two) + String.fromCharCode(three);

      console.log(`${tag}: ${decryptedMessage}`);
    } else {
      console.log('Valid message not found!');
    }
  }
}

messageDecrypter(["4",
  "$Request$: [73]|[115]|[105]|",
  "%Taggy$: [73]|[73]|[73]|",
  "%Taggy%: [118]|[97]|[108]|",
  "$Request$: [73]|[115]|[105]|[32]|[75]|"]);
messageDecrypter(["3",
  "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
  "$tAGged$: [97][97][97]|",
  "$Request$: [73]|[115]|[105]|true"]);