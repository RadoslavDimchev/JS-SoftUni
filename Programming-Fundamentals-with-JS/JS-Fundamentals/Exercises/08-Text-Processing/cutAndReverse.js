function cutAndReverse(input = '') {
  const reversed = input
    .split('')
    .reverse()
    .join('');
  const halfLength = reversed.length / 2;

  const firstHalf = reversed.substring(0, halfLength);
  const secondHalf = reversed.substring(halfLength);

  console.log(secondHalf + '\n' + firstHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');