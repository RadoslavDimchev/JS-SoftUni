function passwordGenerator(input = []) {
    const firstString = input[0];
    const secondString = input[1];
    const word = input[2].toLowerCase();

    const concatenated =
        firstString.concat(secondString);
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let index = 0;
    let password = [];

    for (let char of concatenated) {
        if (vowels.includes(char)) {
            const charOfWord = word[index].toUpperCase();
            password.push(charOfWord);

            index++;
            index = index % word.length;
        } else {
            password.push(char);
        }
    }

    console.log(`Your generated password is ${password.reverse().join('')}`);
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