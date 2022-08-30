function solve() {
  const selectMenu = document.getElementById('selectMenuTo');
  const input = document.getElementById('input');
  const btnElement = document.querySelector('button');
  const result = document.getElementById('result');

  // add binary option
  const binaryOption = document.createElement('option');
  binaryOption.value = 'binary';
  binaryOption.textContent = 'Binary';
  selectMenu.add(binaryOption);

  // add hexadecimal option
  const hexadecimalOption = document.createElement('option');
  hexadecimalOption.value = 'hexadecimal';
  hexadecimalOption.textContent = 'Hexadecimal';
  selectMenu.add(hexadecimalOption);

  // convert decimal number
  const options = {
    binary: (num) => num.toString(2),
    hexadecimal: (num) => num.toString(16).toUpperCase(),
    '': (num) => num
  };

  // listen for click
  btnElement.addEventListener('click', () => {
    result.value = options[selectMenu.value](Number(input.value));
  });
}