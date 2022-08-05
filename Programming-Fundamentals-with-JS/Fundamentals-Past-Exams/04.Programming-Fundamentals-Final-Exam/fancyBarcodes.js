function fancyBarcodes(input = []) {
  const countOfBarcodes = Number(input.shift());
  const pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;
  const digitPattern = /\d/g;

  for (let i = 0; i < countOfBarcodes; i++) {
    const barcode = input.shift();
    const match = barcode.match(pattern);

    if (match) {
      const digits = barcode.match(digitPattern);

      const productGroup = digits ? digits.join('') : '00';

      console.log(`Product group: ${productGroup}`);
    } else {
      console.log('Invalid barcode');
    }
  }
}

fancyBarcodes(["3",
  "@#FreshFisH@#",
  "@###Brea0D@###",
  "@##Che4s6E@##"]);
fancyBarcodes(["6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#"]);