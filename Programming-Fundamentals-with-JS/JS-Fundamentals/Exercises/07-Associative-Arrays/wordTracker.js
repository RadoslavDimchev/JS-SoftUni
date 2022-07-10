function wordTracker(input = []) {
    // parse input 
    // - get words for looking 
    const wordsForLooking = input
        .shift()
        .split(' ');

    // - create a structure of data for 
    // looking words and their count
    const words = {};
    wordsForLooking.forEach(word => words[word] = 0);

    // - get words for check
    const wordsForCheck = input
        .join(' ')
        .split(' ');

    // go through all words for check 
    wordsForCheck.forEach(word => {
        // - when have same word increase count
        if (words.hasOwnProperty(word)) {
            words[word]++;
        }
    });

    // sort by count and print word with it's count
    Object.entries(words)
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, count]) => console.log(word, '-', count));
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another',
    'the', 'And', 'finally', 'the', 'the', 'sentence']);