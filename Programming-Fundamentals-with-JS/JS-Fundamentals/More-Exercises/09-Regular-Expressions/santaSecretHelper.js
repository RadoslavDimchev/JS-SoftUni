function santaSecretHelper(input = []) {
  const key = +input.shift();
  const pattern = /@(?<name>[A-Za-z]+)[^@!:>-]*!G!/;

  while (input[0] !== 'end') {
    const encryptedMessage = input.shift();
    let decryptedMessage = '';

    for (const char of encryptedMessage) {
      decryptedMessage += String.fromCharCode(char.charCodeAt() - key);
    }

    const match = pattern.exec(decryptedMessage);

    if (match) {
      const name = match.groups.name;
      console.log(name);
    }
  }
}

santaSecretHelper(['3',
  'CNdwhamigyenumje$J$',
  'CEreelh-nmguuejnW$J$',
  'CVwdq&gnmjkvng$Q$',
  'end']);
santaSecretHelper(['3',
  "N}eideidmk$'(mnyenmCNlpamnin$J$",
  'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
  'ppqmkkkmnolmnnCEhq/vkievk$Q$',
  'yyegiivoguCYdohqwlqh/kguimhk$J$',
  'end']);