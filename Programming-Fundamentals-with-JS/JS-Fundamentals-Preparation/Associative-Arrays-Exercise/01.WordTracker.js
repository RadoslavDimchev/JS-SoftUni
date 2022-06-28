function wordTracker(input) {
    let words = input
        .shift()
        .split(' ');

    let result = {};

    words.forEach(word => result[word] = 0);

    for (let word of input) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }

    let sorted = Object
        .entries(result)
        .sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(word, '-', count);
    }
}

//second solution with Map
/* function wordTracker(input) {
    let words = input
        .shift()
        .split(' ');

    let result = new Map();

    words.forEach(word => result.set(word, 0));

    for (let word of input) {
        if (result.has(word)) {
            let newValue = result.get(word) + 1;
            result.set(word, newValue);
        }
    }

    let sorted = Array
        .from(result)
        .sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(word, '-', count);
    }
} */

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);