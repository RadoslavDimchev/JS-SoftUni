(text, word) => text.split(' ').filter(x => x === word).length;

'This is a word and it also is a sentence',
    'is' //  2

'softuni is great place for learning new programming languages',
    'softuni' // 1