function postOffice(input = []) {
  const [firstPart, secondPart, thirdPart] =
    input[0].split('|');

  const firstPattern = /([#$%*&])(?<letters>[A-Z]+)\1/g;
  const secondPattern = /(?<asciiCode>\d+):(?<length>\d{2})/g;
  const words = thirdPart.split(' ');

  const firstMatch = firstPattern.exec(firstPart);
  const capitalLetters = firstMatch.groups.letters.split('');

  const wordsData = new Set(secondPart.match(secondPattern));

  for (const letter of capitalLetters) {
    let isTrue = false;

    for (const word of words) {
      if (letter === word[0]) {
        for (let wordData of wordsData) {
          let [ascii, length] = wordData.split(':');
          ascii = Number(ascii);
          length = Number(length) + 1;

          if (word.length === length && word.charCodeAt(0) === ascii) {
            console.log(word);
            wordsData.delete(wordData);
            isTrue = true;
            break;
          }
        }
      }

      if (isTrue) {
        break;
      }
    }
  }
}

postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);
postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig']);