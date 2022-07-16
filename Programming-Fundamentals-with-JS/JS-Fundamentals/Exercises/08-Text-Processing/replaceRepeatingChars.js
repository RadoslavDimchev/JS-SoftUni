function replaceRepeatingChars(input = '') {
  let newText = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== input[i + 1]) {
      newText += input[i];
    }
  }

  console.log(newText);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');