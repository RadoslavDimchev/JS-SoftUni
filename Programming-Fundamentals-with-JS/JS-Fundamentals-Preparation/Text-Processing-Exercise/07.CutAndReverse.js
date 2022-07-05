function cutAndReverse(text) {
    const textLength = text.length;
    const halfTextLength = textLength / 2;

    const firstHalf = text
        .substring(0, halfTextLength)
        .split('')
        .reverse()
        .join('');

    const secondHalf = text
        .substring(halfTextLength, textLength)
        .split('')
        .reverse()
        .join('');

    console.log(`${firstHalf}\n${secondHalf}`);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');