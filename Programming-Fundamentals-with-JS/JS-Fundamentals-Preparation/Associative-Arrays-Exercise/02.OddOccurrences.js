function oddOccurrences(input) {
    let words = input.split(' ');
    let result = new Map();

    for (let word of words) {
        word = word.toLocaleLowerCase();

        if (!result.has(word)) {
            result.set(word, 1);
        } else {
            let newValue = result.get(word) + 1;
            result.set(word, newValue);
        }
    }

    let output = [];

    for (let [word, count] of result.entries()) {
        if (count % 2 === 1) {
            output.push(word);
        }
    }

    console.log(output.join(' '));
}

// second solution
/* function oddOccurrences(input) {
    let words = input.split(' ');
    let result = {};

    for (let word of words) {
        word = word.toLocaleLowerCase();

        if (!result.hasOwnProperty(word)) {
            result[word] = 1;
        } else {
            result[word]++;
        }
    }

    let output = [];

    for (let word in result) {
        if (result[word] % 2 === 1) {
            output.push(word);
        }
    }

    console.log(output.join(' '));

    // second option to print the words 
    // - that appears odd number of times
    // let filtered = Object 
    //     .entries(result)
    //     .filter(([word, count]) => count % 2 === 1)
    //     .map(entry => entry[0])
    //     .join(' ');

    // console.log(filtered);
} */

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');