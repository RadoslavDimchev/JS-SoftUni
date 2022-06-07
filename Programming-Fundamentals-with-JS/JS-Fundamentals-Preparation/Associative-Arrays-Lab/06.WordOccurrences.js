function wordOccurrences(input) {
    let map = new Map();

    for (let word of input) {
        if (!map.has(word)) {
            map.set(word, 0);
        }

        map.set(word, map.get(word) + 1);
    }

    let sorted = Array.from(map);
    sorted.sort((a, b) => b[1] - a[1]);

    for (let [word, words] of sorted) {
        console.log(`${word} -> ${words} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
/* wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]); */