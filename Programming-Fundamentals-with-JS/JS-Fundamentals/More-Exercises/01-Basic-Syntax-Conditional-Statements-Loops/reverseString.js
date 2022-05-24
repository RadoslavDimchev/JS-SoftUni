function reverseString(string) {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }

    console.log(reversedString);

    // let splitString = string.split('');
    // let reverseArray = splitString.reverse();
    // let joinArray = reverseArray.join('');
    // console.log(joinArray); => second way

    // return string.split('').reverse().join(''); => shortened second way
}

reverseString('Hello');
reverseString('SoftUni');
reverseString('1234');