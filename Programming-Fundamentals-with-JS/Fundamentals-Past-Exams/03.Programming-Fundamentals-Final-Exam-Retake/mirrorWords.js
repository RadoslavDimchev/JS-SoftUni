function mirrorWords(input = []) {
  const text = input[0];
  const pattern = /(@|#)(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/g;
  let validPairs = 0;
  const mirror = [];
  let valid;

  while ((valid = pattern.exec(text)) !== null) {
    validPairs++;

    const firstWord = valid.groups.first;
    const secondWord = valid.groups.second;
    const reversedSecond = secondWord.split('').reverse().join('');

    if (firstWord === reversedSecond) {
      mirror.push(`${firstWord} <=> ${secondWord}`);
    }
  }

  if (validPairs === 0) {
    console.log('No word pairs found!');
    console.log('No mirror words!');
  } else {
    console.log(`${validPairs} word pairs found!`);

    if (mirror.length === 0) {
      console.log('No mirror words!');
    } else {
      console.log('The mirror words are:\n' + mirror.join(', '));
    }
  }
}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);