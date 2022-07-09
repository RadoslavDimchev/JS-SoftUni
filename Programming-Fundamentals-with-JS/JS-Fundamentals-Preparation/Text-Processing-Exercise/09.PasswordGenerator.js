function passwordGenerator(input) {
    const firstString = input[0];
    const secondString = input[1];
    const thirdString = input[2].toLocaleLowerCase();

    const concatenated = firstString.concat(secondString);
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let password = '';
    let indexOfThird = 0;

    for (const currChar of concatenated) {
        if (vowels.includes(currChar)) {
            const charOfThird = thirdString[indexOfThird];
            password += charOfThird.toLocaleUpperCase();

            indexOfThird++;
            indexOfThird = indexOfThird % thirdString.length;
        } else {
            password += currChar;
        }
    }

    password = password
        .split('')
        .reverse()
        .join('');

    console.log(`Your generated password is ${password}`);
}

passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange']); // sElbGtNgAvRtOhEGzzNpAvRlO
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters',
    'absolute']); // srTtcUrLhcnOttsSBltAEfTlyzULyOnSmysBA
passwordGenerator([
    'areyousureaboutthisone', 'notquitebutitrustyou',
    'disturbed']); // SIytsDrtDtEbBtRUqtTnSnIsDhttDEbBRrUsTSyIrD