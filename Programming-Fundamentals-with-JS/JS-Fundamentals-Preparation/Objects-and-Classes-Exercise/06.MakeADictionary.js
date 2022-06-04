function makeADictionary(array) {
    let dict = {};

    for (let element of array) {
        let obj = JSON.parse(element);
        dict = Object.assign(dict, obj);
    }

    let sortedKeys = Object.keys(dict);
    sortedKeys.sort();

    for (let term of sortedKeys) {
        console.log(`Term: ${term} => Definition: ${dict[term]}`);
    }
}

// Second Solution 

// function makeADictionary(array) {
//     let dictionary = {};

//     for (let i = 0; i < array.length; i++) {
//         let currTerm = JSON.parse(array[i]);
//         let currTermKey = Object.keys(currTerm);
//         let isEqualTerm = false;

//         for (let j = i + 1; j < array.length; j++) {
//             let nextTerm = JSON.parse(array[j]);
//             let nextTermKey = Object.keys(nextTerm);
//             if (currTermKey[0] === nextTermKey[0] && !isEqualTerm) {
//                 isEqualTerm++;
//                 break;
//             }
//         }

//         if (!isEqualTerm) {
//             dictionary[currTermKey] = Object.values(currTerm);
//         }
//     }

//     let sortedTerms = Object.keys(dictionary);
//     sortedTerms.sort();

//     for (const term of sortedTerms) {
//         console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
//     }
// }

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Coffee":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);
makeADictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ']);