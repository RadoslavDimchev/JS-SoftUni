function modernTimesOfHashTag(input = '') {
  const words = input.split(' ');

  for (const word of words) {
    if (word.startsWith('#') && word.length > 1) {
      let flag = true;
      const wordLower = word.toLowerCase();

      for (let i = 1; i < wordLower.length; i++) {
        if (wordLower[i] < 97 || wordLower[i] > 122) {
          flag = false;
          break;
        }
      }

      if (flag) {
        console.log(word.slice(1));
      }
    }
  }
}


// second solution with RegExp

/* function modernTimesOfHashTag(input = '') {
  const match = input
    .match(/#[A-Za-z]+/g)
    .map(word => word.slice(1));

  console.log(match.join('\n'));
} */


// same as above but on one line

// (input = '') => input.match(/#[A-Za-z]+/g).map(word => word.slice(1)).join('\n');

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');