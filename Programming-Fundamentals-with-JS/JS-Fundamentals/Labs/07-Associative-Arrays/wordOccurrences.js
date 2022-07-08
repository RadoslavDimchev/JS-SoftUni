function wordOccurrences(input) {
    const words = {};

    input.forEach(word => {
        if (!words.hasOwnProperty(word)) {
            words[word] = 0;
        }

        words[word]++;
    });

    Object
        .keys(words)
        .sort((a, b) => words[b] - words[a])
        .forEach(word => {
            console.log(`${word} -> ${words[word]} times`);
        });
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is",
    "another", "sentence", "And", "finally", "the", "third", "sentence"]);
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);