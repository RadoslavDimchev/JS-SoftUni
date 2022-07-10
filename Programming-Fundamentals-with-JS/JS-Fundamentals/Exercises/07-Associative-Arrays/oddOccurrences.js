function oddOccurrences(sentence = '') {
    // create a structure of data for words and their occurs
    const words = new Map();

    // parse input and add words with their occurs count
    sentence
        .split(' ')
        .forEach(word => {
            word = word.toLocaleLowerCase();

            if (!words.has(word)) {
                words.set(word, 0);
            }

            words.set(word, words.get(word) + 1);
        });

    // create a collection of words
    const resultWords = [];

    // get the words that occurs odd times and add to the collection
    for (const [word, count] of words) {
        if (count % 2 !== 0) {
            resultWords.push(word);
        }
    }

    // second way to get words that occurs odd times
    /*  Array.from(words)
         .filter(([word, count]) => count % 2 !== 0)
         .forEach(([word, count]) => resultWords.push(word)); */

    // print the words separated by a single space
    console.log(resultWords.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');